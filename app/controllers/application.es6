var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  menuOpen: false,
  currentWeek: function() {
    return moment().isoWeek();
  }.property()
})
