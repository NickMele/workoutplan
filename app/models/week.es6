export default DS.Model.extend({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  days: DS.hasMany('day')
});