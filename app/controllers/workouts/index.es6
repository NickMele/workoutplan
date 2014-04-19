var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  
  isEditing: false,
  
  actions: {
    edit: function() {
      this.set('isEditing', !this.get('isEditing'));
    }
  }
  
});