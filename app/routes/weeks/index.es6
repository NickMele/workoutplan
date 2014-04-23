var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({
  model: function() {
    return this.store.find('week');
  }
});
