var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: 'Weekly Schedule',

  model: function(params) {
    return this.modelFor('week');
	}
});
