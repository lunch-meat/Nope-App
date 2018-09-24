cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-sms.SMS",
    "file": "plugins/cordova-plugin-sms/www/SMS.js",
    "pluginId": "cordova-plugin-sms",
    "clobbers": [
      "window.SMS"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-sms-receive.SMSReceive",
    "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
    "pluginId": "cordova-plugin-sms-receive",
    "clobbers": [
      "window.SMSReceive"
    ]
  },
  {
    "id": "cordova-plugin-sms-receiver.SmsReceiver",
    "file": "plugins/cordova-plugin-sms-receiver/www/SmsReceiver.js",
    "pluginId": "cordova-plugin-sms-receiver",
    "clobbers": [
      "SmsReceiver"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-sms": "1.0.5",
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-sms-receive": "1.0.1",
  "cordova-plugin-sms-receiver": "0.1.6"
};
// BOTTOM OF METADATA
});