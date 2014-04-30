var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  needs: ['notifications'],

  actions: {
    save: function() {
      var self = this
        , workout = this.get('model');

      workout.save().then(
        function() {
          self.get('controllers.notifications').send('notify', {
            title: 'Workout saved!',
            type: 'success',
            persists: true
          });
          self.transitionToRoute('workouts.index');
        },
        function(reason) {
          var errors = reason.responseJSON.errors
            , messages = [];
          if (errors) {
            for (var key in errors) {
              if (errors.hasOwnProperty(key)) {
                messages.push(key + ' ' + errors[key]);
              }
            }
          }
          self.get('controllers.notifications').send('notify', {
            title: 'Unable to save workout',
            message: messages,
            type: 'error'
          });
        }
      );
    }
  }
});
