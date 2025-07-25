import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';

import './Vid.html'

Template.addVideo.events ({
    "submit .submit" (event) {
        event.preventDefault();

        const target = event.target;
        const url = target.url.value;
        const title = target.title.value;
        const description = target.description.value;

        const Title = title.replace(/^./, c => c.toUpperCase());
        const Description = description.replace(/^./, c => c.toUpperCase());

        Meteor.call('vids.insert', url , Title, Description);
        
        target.url.value = '';
        target.title.value = '';
        target.description.value = '';
    },
    
});

Template.videoList.helpers ({
    getURL() {
        return url;
    },
    getTitle() {
        return Meteor.call(title);
    },
    getDescription() {
        return Description
    },
});