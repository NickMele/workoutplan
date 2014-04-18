export default DS.Model.extend({
  name: DS.attr('string'),
  entries: DS.hasMany('entry')
});
