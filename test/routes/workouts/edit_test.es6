import WorkoutsEditRoute from 'app/routes/workouts/edit';

var route, store;

module('Unit - WorkoutsEditRoute', {
  setup: function(){
    store = {};

    route = WorkoutsEditRoute.create({
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

test('can save', function() {
  expect(1)
  console.log(route.store.createRecord('workout'));
  // ok(route.send('save'));
});