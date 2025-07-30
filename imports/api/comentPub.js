import { Meteor } from 'meteor/meteor';
import { ComCollection } from '../db/ComCollection';

Meteor.publish('coments', function publishComents() {
    return ComCollection.find({});
});