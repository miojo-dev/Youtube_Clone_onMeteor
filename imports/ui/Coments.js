import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Coments.html';
import { ComCollection } from '../db/ComCollection';

Template.coment_item.events ({
    "submit #submit" (event, template) {
        event.preventDefault();

        const target = event.target;
        
        const text = target.text.value;

        Meteor.call('com.insert', text, template.data._id);
        
        target.text.value = '';
    },
})

Template.coment_item.helpers ({
    coments: () => {
        return ComCollection.find({ vidId: Template.instance().data._id },{ sort: {createdAt: -1 } })
    }
})