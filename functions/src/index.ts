import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import { MessagingPayload } from "firebase-admin/lib/messaging/messaging-api"

const messaging = admin.messaging()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const webhook = functions.https.onRequest(async (request, response) => {
  const token = request.body.fcm_token

  functions.logger.info(`token: ${token}`)

  const payload: MessagingPayload = {
    notification: {
      title: "Twoim dzieckiem miota jak szatan!",
      message: "Lepiej biegnij szybko i je sprawdź!",
    },
  }

  const messagingRepsonse = await messaging.sendToDevice(token, payload)
  functions.logger.info("Hello logs!")
  response.send(`Hello from Firebase! Provided token: ${token}`)
})
