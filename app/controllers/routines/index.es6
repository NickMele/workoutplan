export default Ember.ObjectController.extend({
  
  isEditing: false,
  
  actions: {
    edit: function() {
      this.set('isEditing', !this.get('isEditing'));
    }
  }
  
});