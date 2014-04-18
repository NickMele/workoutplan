export default Ember.ContainerView.extend({
  content: null,
  value: null,
  valuePath: 'name',
  selected: null,
  key_events: {
    38: 'prev',
    40: 'next',
    27: 'clear',
    13: 'confirm'
  },

  isDropdownVisible: false,

  template: Ember.Handlebars.compile('{{view.content.name}}'),
  classNames: 'autocomplete',
  childViews: ['inputView', 'dropdownView'],
  emptyView: null,

  inputView: Ember.TextField.extend({
    placeholderBinding: 'parentView.placeholder',
    value: function(key, value) {
      var parentView = this.get('parentView'),
          valuePath;

      if (arguments.length === 2) {
        return value;
      } else {
        valuePath = parentView.get('valuePath').replace(/^content\.?/, '');
        if (valuePath) { valuePath = '.' + valuePath; }

        return parentView.get('value' + valuePath);
      }
    }.property('parentView.value', 'parentView.valuePath'),

    keyUp: function(e) {
      var parentView = this.get('parentView');

      // Only trigger search when it's not a special key. Having this
      // triggered when value changes gives us false positives as to
      // the user's true intensions.
      if (!parentView.key_events[e.keyCode]) {
        parentView.trigger('search', this.get('value'));
      }
    }
  }),

  dropdownView: Ember.CollectionView.extend({
    classNames: 'suggestions',
    tagName: 'ul',

    contentBinding: 'parentView.content',
    selectedBinding: 'parentView.selected',
    templateBinding: 'parentView.template',
    isVisibleBinding: 'parentView.isDropdownVisible',
    emptyViewBinding: 'parentView.emptyView',

    itemViewClass: Ember.View.extend({
      tagName: 'li',
      templateBinding: 'parentView.template',
      classNameBindings: [':suggestion','selected'],

      selected: function() {
        var content = this.get('content'),
            value = this.get('parentView.selected');

        return content === value;
      }.property('parentView.selected'),

      click: function() {
        var parentView = this.get('parentView.parentView'),
            content = this.get('content');

        if (parentView) {
          parentView.trigger('select', content);
        }
      }
    })
  }),
  
  scrollIntoView: function() {
    Ember.run.later(this, function() {
      var $autocomplete = this.$()
        , offset = $autocomplete.offset();
      
      // give some space
      offset.top -= 25;
      
      $('html body').animate({
        scrollTop: offset.top
      });
    },250);
  },

  keyDown: function(e) {
    var map = this.key_events,
        method = map[e.keyCode];

    if (method && Ember.typeOf(this[method]) === 'function') {
      e.preventDefault();
      this[method](e);
    }
  },

  focusIn: function() {
    this.show();
    this.scrollIntoView();
  },

  focusOut: function() {
    setTimeout(Ember.$.proxy(this, 'hide'), 200);
  },

  select: function(value) {
    this.set('value', value);
    this.get('controller').send('addWorkout', value);
    Ember.run.later(this, function() {
      Ember.$.proxy(this, 'hide');
      this.clear();
    }, 100);    
  },

  search: function(term) {
    var controller = this.get('controller');

    if (term) {
      controller.send('search', term, this);
    }
  },

  confirm: function() {
    var selected = this.get('selected');
    if (!selected) {
      selected = this.get('content.firstObject');
      this.set('selected', selected);
    }
    this.select(selected);
  },

  clear: function() {
    this.setProperties({
      value: null,
      selected: null
    }).hide();
  },

  next: function() {
    return this._move(+1, this.get('content.firstObject'));
  },

  prev: function() {
    return this._move(-1, this.get('content.lastObject'));
  },

  show: function() {
    this.set('isDropdownVisible', true);
    return this;
  },

  hide: function() {
    this.set('isDropdownVisible', false);
    return this;
  },

  _move: function(dir, def) {
    var selected = this.get('selected'),
        content = this.get('content'),
        index = content.indexOf(selected);

    if (index !== -1) {
      selected = content.objectAt(index + dir);
    } else {
      selected = def;
    }

    this.set('selected', selected).show();

    return selected;
  },

  contentDidChange: function() {
    this.show();
  }.observes('content')
});