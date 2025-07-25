import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './App.html';
import './videos.html';

Template.mainContainer.onCreated(function helloOnCreated() {
  this.theme = new ReactiveVar('.light-mode');
});

Template.mainContainer.helpers({
  theme() {
    return Template.instance().theme.get();
  },
    videoUrl() {
    const instance = Template.instance
  },
});

Template.mainContainer.events({
  'click .theme-toggle'(event, instance) {
    // Toggle the theme between light and dark
    const currentTheme = instance.theme.get();
    if (currentTheme === '.light-mode') {
      instance.theme.set('.dark-mode');
    } else {
      instance.theme.set('.light-mode');
    }
  },
});
