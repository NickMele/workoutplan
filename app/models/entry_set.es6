export default DS.Model.extend({
  setNumber: DS.attr('number'),
  weight: DS.attr('number'),
  reps: DS.attr('number'),
  entry: DS.belongsTo('entry')
});
