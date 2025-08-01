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
    }    
});

Template.videoListItem.onCreated(function videoListItem() {
    this.show = new ReactiveVar(false);
    this.intervalId = null;
})

Template.videoListItem.helpers({
    link: () => {
        const idVidYT = Template.instance().data.idVidYT
        
        return `https://www.youtube.com/embed/${idVidYT}`
    },
    show: () => Template.instance().show.get()
})

Template.videoListItem.events ({
    "click .remove" () {
        Meteor.call('vids.remove', this._id)
    },

    //'click #deslike' () {
    //    Meteor.call('vids.deslike', this.id)
    //},

    "mousedown #deslike, touchstart #deslike" (event, instance) {
        if (instance.intervalId) return;

        instance.intervalId = setInterval(() => {
            Meteor.call('vids.deslike', instance.data._id)
        }, 100);
    },

    'mouseup #deslike, mouseleave #deslike, touchend #deslike' (event, instance) {
        if (instance.intervalId) {
        clearInterval(instance.intervalId);
        instance.intervalId = null;
        }
    },

    "click #like" () {
        Meteor.call('vids.like', this._id)
    },

    "click .show-coments" (event, template) {
        template.show.set(!template.show.get())
    }
})