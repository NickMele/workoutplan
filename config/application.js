//= require jquery
//= require moment
//= require environment
//= require ember-appkit
//= require_self
//= require_tree ./adapters
//= require_tree ./serializers
//= require router
//= require_tree ../app
//= require_tree ./initializers

Ember.LinkView.reopen({
  eventName: 'tap'
});

window.App = require('app').default.create();
