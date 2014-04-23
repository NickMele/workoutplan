export default Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['day-selector'],
  content: ["0", "1", "2", "3", "4", "5", "6"],
  itemViewClass: Ember.View.extend({
    tagName: 'li',
    classNameBindings: ['selected'],
    templateName: 'routines/days',
    
    selected: false,
    
    toggleSelected: function() {
      var days = this.get('controller.days'),
          day = this.get('content');
      if (!days) {
        this.set('selected', false);
      } else {
        this.set('selected', days.contains(day));
      }
      
    }.observes('controller.days.@each').on('init'),
    
    weekday: function() {
        var day = this.get('content');
        return moment().weekday(day).format('dddd');
    }.property(),

    click: function() {
      var day = this.get('content'),
          selected = this.get('selected');
    
      this.get('controller').send('toggleDay', day, selected);
      
    }

  })
});
