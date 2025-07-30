import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ComCollection } from '../db/ComCollection';

Meteor.methods({
    async 'com.insert' (text, vidId) {
        check(text, String)
        check(vidId, String)

        await ComCollection.insertAsync({
            vidId,
            text,
            createdAt: new Date(),
        });
    },
})