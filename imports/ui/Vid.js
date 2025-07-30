import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Vid.html';

Template.addVideo.events ({
    "submit #submit" (event) {
        event.preventDefault();

        const target = event.target;
        
        const idVidYT = target.idVidYT.value;
        const title = target.title.value;
        const description = target.description.value;

        const Title = title.replace(/^./, c => c.toUpperCase());
        const Description = description.replace(/^./, c => c.toUpperCase());



        Meteor.call('vids.insert', idVidYT , Title, Description, 0, 0);
        
        target.idVidYT.value = '';
        target.title.value = '';
        target.description.value = '';
    },
    
});

Template.videoListItem.helpers({
    link: () => {
        const idVidYT = Template.instance().data.idVidYT
        
        return `https://www.youtube.com/embed/${idVidYT}`
    }
})

Template.videoListItem.events ({
    "click .remove" () {
        Meteor.call('vids.remove', this._id)
    },

    "click #deslike" () {
        Meteor.call('vids.deslike', this._id)
    },

    "click #like" () {
        Meteor.call('vids.like', this._id)
    }
})