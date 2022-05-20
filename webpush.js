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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fM4OS4htAVk:APA91bHYej76mViN0JMp22BFbc6vAsLy8cwDuANG7bp7Rox8p3PhRWUWyUSCExVO2uoVPwWpkQoaqvbMqG4-_aGW8_fa4s2NExTqWD7y0qJ3kvuTtsnkAE38hELd5tiHBHgUSoVk7JR8","expirationTime":null,"keys":{"p256dh":"BChAOCHbm_LzzIAOz_ck3IFzTVJOsE2s4whtsbBPyYXAB4dTJ6TX2qw0cR2FJePS-imvwn23DG_5AWddngZ_FRQ","auth":"z1xOBiOOTa9fvZ2WNzfkNg"}};
  webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
