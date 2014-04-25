var Router = Ember.Router.extend({
  // Uncomment to change Ember's router to use the
  // HTML5 History API
  // Please note that not all browsers support this!
  // You will also need to uncomment the greedy route matcher
  // in config/routes.rb

  // location: 'history'
  closeMenuOnUrlChange: function() {
    this.send('closeMenu');
  }.on('didTransition')
});

Router.map(function() {
  this.resource('weeks', function() {
    this.resource('week', { path: '/:week_id' }, function() {
      this.route('day', { path: '/:day_id' });
    });
  });
  this.resource('routines', function() {
    this.route('new');
    this.route('show', {path: ':routine_id'});
    this.route('edit', {path: ':routine_id/edit'});
  });
  this.resource('workouts', function() {
    this.route('new');
    this.route('show', {path: ':workout_id'});
    this.route('edit', {path: ':workout_id/edit'});
  });
});

export default Router;
