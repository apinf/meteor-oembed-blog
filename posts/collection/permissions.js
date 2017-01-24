import { Posts } from './';

Posts.allow({
  insert () {
    if (Meteor.user()){
     return true;
    }
  },
  remove: function (userId, doc) {
      userCanDelete = doc.userId === userId;
        return userCanDelete;
  },
  update: function (userId, doc, fields, modifier) {
  // can only change your own documents
    userCanModify = doc.userId === userId;
    return userCanModify;
},


});
