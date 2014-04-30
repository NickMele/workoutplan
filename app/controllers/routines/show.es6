var BaseController = require('app/controllers/base').default
export default BaseController.extend({

  scheduledDays: function() {
    var _this = this
      , daysOfWeek = ["1", "2", "3", "4", "5", "6", "0"]
      , days = _this.get('days')
      , scheduled = [];

    scheduled = daysOfWeek.map(function(day) {
      return {
        "abbreviation": moment().isoWeekday(day).format('ddd'),
        "scheduled": days.contains(day)
      };
    });

    return scheduled;

  }.property('days'),

  actions: {
    delete: function(model) {
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionToRoute('routines.index');
      });
    }
  }
})
