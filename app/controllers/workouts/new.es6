var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  actions: {
    save: function() {
      var self = this
        , workout = this.get('model');

      workout.save().then(function() {
        self.transitionToRoute('workouts.show', workout);
      });
    }
  }
});