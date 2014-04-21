var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({
  
  title: null,
  
  afterModel: function(model) {
    this.set('title', model.get('name'));
  },
  
  model: function(params) {
    return this.store.find('workout', params.workout_id);
  },
  
  actions: {
    destroyRecord: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('workouts.index');
      });
    }
  }
});
