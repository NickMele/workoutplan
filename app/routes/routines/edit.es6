export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('routine', params.routine_id);
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  },
  actions: {
    cancel: function(model) {
      this.transitionTo('routines.index');
    }
  }
});
