var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: 'Weekly Schedule',

  model: function() {
    return this.store.find('week');
  }
});
