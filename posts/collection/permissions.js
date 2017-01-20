import { Posts } from './';

Posts.allow({
  insert () {
    if (Meteor.user()){
     return true;
    }
  },
  remove: function (doc) {
    return doc.userId === Meteor.userId();
  },

});
