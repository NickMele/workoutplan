export default Ember.ObjectController.extend({
  needs: ['application'],

  title: 'Workout Plan',

  menuOpen: Ember.computed.alias('controllers.application.menuOpen'),

  currentWeek: function() {
    return moment().isoWeek();
  }.property(),

  dayOfYear: function() {
    return moment().dayOfYear();
  }.property()
});
