import * as functions from "firebase-functions"

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const webhook = functions.https.onRequest((request, response) => {
  request.body()

  functions.logger.info("Hello logs!", { structuredData: true })
  response.send("Hello from Firebase!")
})
