import { Template } from 'meteor/templating'
import { VidCollection } from '../db/VidCollection';

import './Vid.html'
import "./App.html"

Template.app.onCreated(function app() {
  const template = this
  template.search = new ReactiveVar();

  Tracker.autorun(() => {
    const search = template.search.get();
    Meteor.subscribe('videos', search);
  });
})

Template.app.events({
  "input [name=search]" (event, template) {

    const target = event.target;

    const search = target.value;

    template.search.set(search)
  }
})

Template.app.helpers({
  videos: () => {

    return VidCollection.find({}, {sort: {createdAt: -1}})
    
  }
})