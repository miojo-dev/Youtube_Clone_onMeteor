import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './App.html';
import './videos.html';
import { Meteor } from 'meteor/meteor';

Template.themeSwitcher.onCreated(function themeSwitcherOnCreated() {
  // Initialize the theme variable
  this.theme = new ReactiveVar('.light-mode');
  
});

Template.themeSwitcher.helpers({
  theme() {
    return Template.instance().theme.get();
  },
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    Meteor.Warn(theme);
  },
});
