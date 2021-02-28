require('dotenv').config()

const functions = require("firebase-functions")

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

exports.sendInvite = functions.firestore.document('invites/{phoneNumber}').onCreate(async (doc) => {
    const from = '+19295526869';
    const to = doc.data().phoneNumber;
  
    const body = 'You are one one of the cool kids now! 👋👋👋'
  
    return client.messages
        .create({ body, from, to })
        .then(message => console.log('message.sid', message.sid))
        // .catch(err => console.log(err))
})
