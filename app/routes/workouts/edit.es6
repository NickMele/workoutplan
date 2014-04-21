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
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('workouts.show', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('workouts.show', model);
    }
  }
});
