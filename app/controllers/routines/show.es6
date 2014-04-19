var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  
  actions: {
    delete: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionToRoute('routines.index');
      });
    }
  }
})