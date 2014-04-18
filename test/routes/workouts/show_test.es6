import WorkoutsShowRoute from 'app/routes/workouts/show';

var route, store;

module('Unit - WorkoutsShowRoute', {
  setup: function(){
    store = {};

    route = WorkoutsShowRoute.create({
      store: store
    });
  },
  teardown: function(){
    Ember.run(route, 'destroy');
  }
});

test('it exist', function(){
  expect(2);

  ok(route);
  ok(route instanceof Ember.Route);
});
