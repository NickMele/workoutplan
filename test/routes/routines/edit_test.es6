import RoutinesEditRoute from 'app/routes/routines/edit';

var route, store;

module('Unit - RoutinesEditRoute', {
  setup: function(){
    store = {};

    route = RoutinesEditRoute.create({
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
