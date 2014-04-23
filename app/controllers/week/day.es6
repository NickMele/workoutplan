var BaseController = require('app/controllers/base').default
export default BaseController.extend({
  
  detailedLogging: false,
  
  //-- determine the status of this "day" ["current","upcoming","completed","skipped"]
  status: null,
  updateStatus: function() {
    var self = this
      , completed = this.get('log.completed')
      , date = moment(this.get('date'))
      , today = moment();
    // if (completed) {
    //   self.set("status","completed");
    // } else if (!completed && date.isBefore(today,'day')) {
    //   self.set("status","skipped");
    // }
    if (date.isSame(today,'day')) {
      self.set("status","current");
    }
    // if (date.isAfter(today,'date')) {
    //   self.set("status","upcoming");
    // }
  }.observes('log.completed').on('init'),
  
  //-- set current flag
  current: function() {
    return (this.get('status') === 'current');
  }.property('status'),
  
  //-- determine total number of routines
  totalRoutines: function() {
    return this.get('routines.length');
  }.property('routines'),
  
  //-- determine total number of workouts
  totalWorkouts: function() {
    var routines = this.get('routines')
      , total = 0;
    routines.forEach(function(routine) {
      total += routine.get('workouts.length');
    });
    return total;
  }.property('routines.workouts'),
  
  actions: {
    save: function(status) {
      console.log(status);
      
    },
    log: function() {
      console.log('create log');
      //-- setup server to actually process this and return a real log
      this.set('log', this.store.createRecord('log'))
    }
  }
  
});
