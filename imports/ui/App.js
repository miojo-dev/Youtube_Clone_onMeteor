import { Template } from 'meteor/templating'
import

Template.app.onCreated(function app() {
  const handler = Meteor.subscribe('videos');
})