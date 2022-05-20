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
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
