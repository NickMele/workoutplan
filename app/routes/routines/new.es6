export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('routine');
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
        _this.transitionTo('routines.show', model);
      });
    },
    cancel: function() {
      this.transitionTo('routines.index');
    }
  }
});
