import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import { MessagingPayload } from "firebase-admin/lib/messaging/messaging-api"

const app = admin.initializeApp()
const firestore = app.firestore()
const messaging = app.messaging()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const webhook = functions.https.onRequest(async (request, response) => {
  if (request.method !== "POST") {
    response.status(401).send("method is not POST")
    return
  }

  functions.logger.info(typeof request.body)
  functions.logger.info(request.body)

  const {userUid, deviceId} = request.body

  if (!userUid || !deviceId) {
    response.status(401).send("userUid and/or deviceId are null")
    return
  }

  try {
    await firestore
    .collection("users")
    .doc(userUid)
    .collection("logs")
    .add({
      deviceId,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    })

    const fcmTokens: string[] = []

    const tokensSnapshot = await firestore
    .collection("users")
    .doc(userUid)
    .collection("fcmTokens")
    .get()

    for (const doc of tokensSnapshot.docs) {
      const token = doc.data().fcmToken
      fcmTokens.push(token)
    }

    functions.logger.info(fcmTokens)

    const payload: MessagingPayload = {
      notification: {
        title: "Twoim dzieckiem miota jak szatan!",
        message: "Lepiej biegnij szybko i je sprawdź!",
        image: "https://i1.memy.pl/big/70cc7d_136942766037.jpg"
      },
    }

    const messagingResponse = await messaging.sendToDevice(fcmTokens, payload)
    functions.logger.info(`Messaging response: ${messagingResponse}`)
    response.send(
      `Hello from Firebase! userUid: ${userUid}, deviceId: ${deviceId}`
    )
  } catch (error) {   
    functions.logger.info(`error: ${error}`)
  }
})
