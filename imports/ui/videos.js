import { Meteor } from 'meteor/meteor';
import './videos.html';
import { template } from 'meteor/templating';

template.video.helpers({
  videoUrl() {
    const videoUrl= this._id;
    return url;
  },
});