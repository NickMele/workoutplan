var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: 'New Routine',

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
    cancel: function() {
      this.transitionTo('routines.index');
    }
  }
});
