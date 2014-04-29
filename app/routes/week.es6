var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: 'Weekly Schedule',

  model: function(params) {
    return this.store.find('week', params.week_id);
	}
});
