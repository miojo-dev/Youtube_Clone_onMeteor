import { Meteor } from 'meteor/meteor';
import { VidCollection } from '../db/VidCollection';

Meteor.publish('videos', function publishVideos() {
    return VidCollection.find({});
});