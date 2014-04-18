export default Ember.ObjectController.extend({
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