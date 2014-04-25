var BaseController = require('app/controllers/base').default
export default BaseController.extend({

  actions: {
    addWorkout: function(workout) {
      var workouts = this.get('model.workouts');
      if (workouts.contains(workout)) {
        return;
      }
      workouts.pushObject(workout);
    },

    removeWorkout: function(workout) {
      var workouts = this.get('workouts');
      workouts.removeObject(workout);
    },

    search: function(term, context) {
      var self = this,
          workouts = self.store.find('workout', { name: term });
      workouts.then(function(workouts) {
        // var newWorkout = self.store.createRecord('workout', { name: term });
        // workouts.insertAt(0, newWorkout);
        context.set('content', workouts);
      });
    },

    toggleDay: function(day, selected) {
      var days = this.get('model.days');
      if (!selected) {
        days.pushObject(day);
      } else {
        days.removeObject(day);
      }
    },

    saveRoutine: function() {
      var self = this
        , routine = this.get('model')
        , workouts = routine.get('workouts');

      workouts.save().then(function() {
        routine.save().then(function() {
          self.transitionToRoute('routines.index');
        });
      });
    }
  }
});
