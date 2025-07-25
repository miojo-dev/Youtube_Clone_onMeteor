import { Meteor } from 'meteor/meteor';
import { VidCollection } from '../db/VidCollection.js';

Meteor.publish('vids', function() {
  return VidCollection.find({});
});