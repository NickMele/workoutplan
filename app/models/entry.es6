export default DS.Model.extend({
  length: DS.attr('number'),
  log: DS.belongsTo('log'),
  workout: DS.belongsTo('workout'),
  entry_sets: DS.hasMany('entry_set')
});
