export default Ember.Route.extend({

	actions: {
		toggleMenu: function(template, model) {
			var menuOpen = this.controller.get('menuOpen');
			this.controller.set('menuOpen', !menuOpen);
		},
    closeMenu: function() {
      this.controller.set('menuOpen', false);
    },
    openMenu: function() {
      this.controller.set('menuOpen', true);
    }
	}

});
