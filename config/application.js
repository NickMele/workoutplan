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

if (!window.navigator.standalone) {
  $('html').addClass('standalone')
}

window.App = require('app').default.create();
