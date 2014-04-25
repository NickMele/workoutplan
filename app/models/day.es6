export default DS.Model.extend({
  "week": DS.belongsTo('week'),
  "date": DS.attr('string'),
  "dayOfWeek": DS.attr('string'),
  "routines": DS.hasMany('routine'),
  "log": DS.belongsTo('log')
});
