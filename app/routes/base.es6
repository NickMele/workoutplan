export default Ember.Route.extend({
  activate: function() {
    var title = this.get('title');
    if (title) {
      this.controllerFor('header').set('title', title);
    }    
  }
})