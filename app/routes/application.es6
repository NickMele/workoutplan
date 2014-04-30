export default Ember.Route.extend({

	actions: {
		toggleMenu: function() {
			var menuOpen = this.controller.get('menuOpen');
			this.controller.set('menuOpen', !menuOpen);
		},
		closeMenu: function() {
			this.controller.set('menuOpen', false);
		},
		openMenu: function() {
			this.controller.set('menuOpen', true);
		},
		closeNotification: function() {
			this.controllerFor('notifications').send('closeNotification');
		}
	}

});
