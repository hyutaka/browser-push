const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
    publicKey: 'BBytYAQJ75ZNC9Xsf8rMdYMKojpqY43L5A6tfFaVX2zhP5gC30XYTnlwKw4pbxcbmjlVTEEo3vdDnMZX3IPEA1Y',
    privateKey: 'WPSgnOQpF4JlIm2Ss6ZVtYFBmDiUgm4YtHF6H-1fo60'
  };

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/fo9xRYrgzvE:APA91bEVq9beB3IbPOePO2krqbjoqnd8De1gqNYRq1MgXmxN_NpT9wrj8V47BzU9dxgiGvilnWULnmypZXh1RHwLftw-A8OekYljlcdn_cdRH_lFKQc_DffBc7j8_wFcJV81eX09T312",
  "expirationTime": null,
  "keys": {
    "p256dh": "BMY1wod1eL0yYBc7GVoN_cgh82YJ6DiVh9awbE-AqZDWW2qa1sHBopUx34nmYxIy0QW6QyVpmM-NRDMHP9qB6Ls",
    "auth": "mUyA1kqckephKfOu2P0XYA"
  }
}
  ;

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
