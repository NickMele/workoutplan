export default Ember.ObjectController.extend({
  actions: {
    delete: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionToRoute('routines.index');
      });
    }
  }
})