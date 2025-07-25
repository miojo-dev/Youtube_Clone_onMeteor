import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import "../imports/ui/App.html";
import "../imports/ui/Vid.html";
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.theme = new ReactiveVar("1");
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  class: () => {
    return "classe1 classe2"
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
