import { Template } from 'meteor/templating'
import './Vid.html'
import "./App.html"

import { VidCollection } from '../db/VidCollection';

Template.app.onCreated(function app() {
  const handler = Meteor.subscribe('videos');
})

Template.app.helpers({
  videos: () => {
    const videos = VidCollection.find({}, {sort: {createdAt: -1}}).fetch()

    return videos
  }
})