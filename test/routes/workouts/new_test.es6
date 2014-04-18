import WorkoutsNewRoute from 'app/routes/workouts/new';

var route, store;

module('Unit - WorkoutsNewRoute', {
  setup: function(){
    store = {};

    route = WorkoutsNewRoute.create({
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
