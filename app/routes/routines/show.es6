export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('routine', params.routine_id);
  }
});
