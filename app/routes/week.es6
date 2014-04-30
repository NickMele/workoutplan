var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: 'Schedule',

  model: function(params) {
    return this.store.find('week', params.week_id);
	},

  // after the model loads, redirect to the current day
  afterModel: function(week, transition) {
    var dayOfWeek = moment().isoWeekday()
      , currentWeek = moment().isoWeek();

      console.log(transition);

    if (!transition.params.day) {
      if (currentWeek == week.get('id')) {
        this.transitionTo('day.index', week.get('days').objectAt(dayOfWeek-1));
      } else {
        this.transitionTo('day.index', week.get('days.firstObject'));
      }
    }
  }
});
