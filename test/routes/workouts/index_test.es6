import WorkoutsIndexRoute from 'app/routes/workouts/index';

var route, store;

module('Unit - WorkoutsIndexRoute', {
  setup: function(){
    store = {};

    route = WorkoutsIndexRoute.create({
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
