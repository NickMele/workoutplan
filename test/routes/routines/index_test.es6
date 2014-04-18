import RoutinesIndexRoute from 'app/routes/routines/index';

var route, store;

module('Unit - RoutinesIndexRoute', {
  setup: function(){
    store = {};

    route = RoutinesIndexRoute.create({
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
