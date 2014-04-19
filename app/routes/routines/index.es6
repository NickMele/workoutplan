var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({
  
  title: 'Routines',
  
  setupController: function(controller,model) {
    this._super(controller,model);
    controller.setProperties({
      'isEditing': false
    });
  },
  
  model: function() {
    return this.store.find('routine');
  }
});
