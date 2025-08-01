import { Template } from 'meteor/templating'
import { VidCollection } from '../db/VidCollection';

import './Vid.html'
import "./App.html"

Template.app.onCreated(function app() {
  const template = this
  template.search = new ReactiveVar();
  template.showForm = new ReactiveVar();

  Tracker.autorun(() => {
    const search = template.search.get();
    Meteor.subscribe('videos', search);
  });

  Meteor.subscribe('coments');
})

Template.app.events({
  "input [name=search]" (event, template) {

    const target = event.target;

    const search = target.value;

    template.search.set(search)
  },

  "click .dropdown" (event, template) {
    template.showForm.set(!template.showForm.get())
    console.log('teste', template.showForm.get());
  }
})

Template.app.helpers({
  videos: () => VidCollection.find({}, {sort: {createdAt: -1}}),
  ShowForm: () => Template.instance().showForm.get()
})