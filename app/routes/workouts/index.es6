var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({
  
  title: 'Workouts',
  
  model: function() {
    return this.store.find('workout');
  }
});
