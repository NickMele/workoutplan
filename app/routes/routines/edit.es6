export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('routine', params.routine_id);
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    save: function(model) {
      var _this = this;
      model.save().then(function() {
        _this.transitionTo('routines.show', model);
      });
    },
    cancel: function(model) {
      this.transitionTo('routines.show', model);
    }
  }
});
