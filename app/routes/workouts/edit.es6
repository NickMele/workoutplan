var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  model: function(params) {
    return this.store.find('workout', params.workout_id);
  },

  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    cancel: function(model) {
      this.transitionTo('workouts.show', model);
    }
  }
});
