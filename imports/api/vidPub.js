import { Meteor } from 'meteor/meteor';
import { VidCollection } from '../db/VidCollection';

Meteor.publish('tasks', function publishTasks() {
    return VidCollection.find({});
});