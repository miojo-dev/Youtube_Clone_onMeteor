import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VidCollection } from '../db/VidCollection';

Meteor.methods({
    async 'vids.insert' (url, title, description) {
        check(url, String);
        check(title, String);
        check(description, String);

        const result = await VidCollection.insertAsync({
            url,
            title,
            description,
            createdAt: new Date(),
        });

        return console.log(result)
    },

    async 'tasks.remove' (vidId) {
        check(vidId, String);


        const vid = await VidCollection.findOneAsync({_id: vidId});

        if (!vid) {
            throw new Meteor.Error("Video not found");
        }

        VidCollection.removeAsync(vidId);
    }
})