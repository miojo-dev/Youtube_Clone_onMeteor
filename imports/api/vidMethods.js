import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { VidCollection } from '../db/VidCollection';

Meteor.methods({
    async 'vids.insert' (idVidYT, title, description) {
        check(idVidYT, String);
        check(title, String);
        check(description, String);

        await VidCollection.insertAsync({
            idVidYT,
            title,
            description,
            createdAt: new Date(),
        });
    },

    async 'vids.remove' (vidId) {
        check(vidId, String);

        const vid = await VidCollection.findOneAsync({_id: vidId});

        if (!vid) {
            throw new Meteor.Error("Video not found");
        }

        VidCollection.removeAsync(vidId);
    },

    async 'vids.deslike' (vidId) {
        check(vidId, String);

        const vid = await VidCollection.findOneAsync({_id: vidId});

        if (!vid) {
            throw new Meteor.Error("Video not found");
        }

        VidCollection.updateAsync({
            _id: vidId
        }, {
            $inc: { deslike: 1 }
        })
    },

    async 'vids.like' (vidId) {
        check(vidId, String);

        const vid = await VidCollection.findOneAsync({_id: vidId});

        if (!vid) {
            throw new Meteor.Error("Video not found");
        }

        VidCollection.updateAsync({
            _id: vidId
        }, {
            $inc: { like: 1 }
        })
    }
})