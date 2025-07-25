import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VidCollection } from '../db/VidCollection.js';

Meteor.methods({
    
  'vids.insert'(url, title, description) {
        check(url, String)
        check(title, String)
        check(description, String)


        // Insert the video 
        VidCollection.insert({
            url,
            title,
            description,
            createdAt: new Date(), // current time
        });
    },

    'vids.remove'(_id) {
        // Remove the video from the VidCollection
        VidCollection.remove(_id);
    },
});