export default Ember.ObjectController.extend({
  
  title: 'Workout Plan',
  
  currentWeek: function() {
    return moment().isoWeek();
  }.property()
  
});