var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({
  
  title: 'New Workout',
  
  model: function() {
    return this.store.createRecord('workout');
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('workouts.show', model);
      });
    },
    cancel: function() {
      this.transitionTo('workouts.index');
    }
  }
});
