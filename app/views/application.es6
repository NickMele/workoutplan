export default Ember.View.extend({
  didInsertElement: function() {
    var controller = this.get('controller');
    
    Ember.$('body').on('swipe', function(event) {
      if (controller.get('menuOpen') && event.direction === 'left') {
        event.stopImmediatePropagation();
        event.preventDefault();
        controller.send('closeMenu');
      }  
    });
  }
});
