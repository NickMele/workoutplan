var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({
  
  title: null,
  
  afterModel: function(model) {
    this.set('title', model.get('name'));
  },
  
  model: function(params) {
    return this.store.find('routine', params.routine_id);
  }
});
