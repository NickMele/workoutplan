import RoutinesNewRoute from 'app/routes/routines/new';

var route, store;

module('Unit - RoutinesNewRoute', {
  setup: function(){
    store = {};

    route = RoutinesNewRoute.create({
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
