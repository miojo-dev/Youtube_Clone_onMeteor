import { Meteor } from 'meteor/meteor';
import '../imports/api/vidMethods';
import '../imports/api/vidPub';
import '../imports/db/VidCollection';
import '../imports/api/comentMethods'
import '../imports/api/comentPub'
import '../imports/db/ComCollection'

Meteor.startup(() => {
  // code to run on server at startup
});
