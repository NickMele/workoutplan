export default DS.Model.extend({
  name: DS.attr('string'),
  workouts: DS.hasMany('workout', {embedded: 'always'}),
  days: DS.attr('array', {defaultValue: []})
});
