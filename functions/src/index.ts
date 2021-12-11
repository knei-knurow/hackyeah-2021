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
  functions.logger.info(request.body)
  const {userUid, deviceId} = JSON.parse(request.body)

  if (!userUid || !deviceId) {
    response.status(401).send("userUid and/or deviceId are null")
    return
  }


  const fcmTokens: string[] = []
  try {
    const tokensSnapshot = await firestore
    .collection("users")
    .doc(userUid)
    .collection("fcmTokens")
    .get()

    for (const doc of tokensSnapshot.docs) {
    const token = doc.data().fcmToken
    fcmTokens.push(token)
  }
  } catch (error) {   
    functions.logger.info(`error: ${error}`)
  }

  // Get all fcmTokens of a particular user, so that they are notified on all
  // devices
  

  functions.logger.info(fcmTokens)

  const payload: MessagingPayload = {
    notification: {
      title: "Twoim dzieckiem miota jak szatan!",
      message: "Lepiej biegnij szybko i je sprawdź!",
    },
  }

  // Get ID
  // firestore.collection("users").doc(userUid).collection("devices").doc()

  // Send notification to all of the user's devices
  const messagingResponse = await messaging.sendToDevice(fcmTokens, payload)
  functions.logger.info(`Messaging response: ${messagingResponse}`)
  response.send(
    `Hello from Firebase! userUid: ${userUid}, deviceId: ${deviceId}`
  )
})
