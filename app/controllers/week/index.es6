var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  showPastDays: false,

  filtered: function() {
    var _controller = this;

    return this.get('model.days').filter(function(day) {
      var date = moment(day.get('date'))
        , today = moment();

      if (_controller.get('showPastDays')) {
        return true;
      } else {
        return !date.isBefore(today,'day')
      }

    });
  }.property('model.days.@each.date', 'showPastDays'),

  actions: {
    togglePastDays: function() {
      this.set('showPastDays', !this.get('showPastDays'));
    }
  }
});
