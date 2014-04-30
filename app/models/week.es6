export default DS.Model.extend({
  start_date: DS.attr('string'),
  end_date: DS.attr('string'),
  days: DS.hasMany('day')
});
