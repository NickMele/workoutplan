var BaseController = require('app/controllers/base').default
export default BaseController.extend({

  notification: null,

  actions: {
    notify: function(options) {
      this.set('notification', options);
    },

    closeNotification: function() {
      var notification = this.get('notification');
      if (notification) {
        if (notification.persists) {
          notification.persists = null;
        } else {
          this.set('notification', null)
        }
      }
    }
  }

})
