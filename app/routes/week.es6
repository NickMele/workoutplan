var BaseRoute = require('app/routes/base').default
export default BaseRoute.extend({

  title: 'Weekly Schedule',

  model: function(params) {
    return this.store.find('week', params.week_id);
	},

  // after the model loads, redirect to the current day
  afterModel: function(week) {
    var dayOfWeek = moment().isoWeekday()
      , currentWeek = moment().isoWeek();

    if (currentWeek == week.get('id')) {
      this.transitionTo('day.index', week.get('days').objectAt(dayOfWeek-1));
    } else{
      this.transitionTo('day.index', week.get('days.firstObject'));
    }
  }
});
