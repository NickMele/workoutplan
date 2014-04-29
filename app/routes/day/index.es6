var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  model: function(params) {
    return this.modelFor('day');
  }
});
