export default DS.Model.extend({
  date: DS.attr('date'),
  routines: DS.hasMany('routine')
});
