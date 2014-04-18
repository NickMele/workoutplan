import RoutinesShowRoute from 'app/routes/routines/show';

var route, store;

module('Unit - RoutinesShowRoute', {
  setup: function(){
    store = {};

    route = RoutinesShowRoute.create({
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
