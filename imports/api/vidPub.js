import { Meteor } from 'meteor/meteor';
import { VidCollection } from '../db/VidCollection';

Meteor.publish('videos', function publishVideos(search) {
    const filter = {};

    if (search) {
        filter.$or = [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } }
        ]
        return VidCollection.find(filter)
    } else {
        return VidCollection.find({});
    }
    
});