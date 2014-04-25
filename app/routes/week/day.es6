var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: null,

  afterModel: function(model) {
    this.set('title', moment(model.get('date')).format('dddd'));
  },

  model: function(params) {
    return this.modelFor('week');
  }
});
