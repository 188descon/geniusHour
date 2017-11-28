//create an HTML notification
var notification = webkitNotifications.createHTMLNotification(
  'notification.html' // html url - can be relative
  );
notification.show();
