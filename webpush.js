const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BFrFoDGk-dPJ-3b71p3rmf9HaqsbtSx_a8X0Ue7wuMdq9nziNCFtiqCXVqL9CtFgoeQ5KD7pyTYhOen2uF3qLUw',
  privateKey: 'OGmmtAoQoOQ2h4rfEptii1-6-ShlKDGA4fId4n2jYTU'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/dEt-NEgqwLo:APA91bELCxVtsjOf3oV49s70RQ9KORcvHDvQgdSivOkC1pkymQ71axYCyj60PlyJYxSG1l9OePkS6ogjZ23Wb9XvIr4X3o6-99iLf-tYe1SCCVrI8sCm4W08KUzotrni2Ox_Y_P5w_-g",
  "expirationTime":null,
  "keys":{"p256dh":"BH8acNcfD3pt7MH4svmw9J9xcTWNYPWNPP1K44R1CPGdM31g57TR6TKxIaW9a9CdpRK7KY_rj6QYa6jXRLzNS_A","auth":"G2RB3PG8EnTMXOUS59K5qQ"}}
;

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
