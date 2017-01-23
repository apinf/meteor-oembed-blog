import { Posts } from './';

Posts.allow({
  insert () {
    if (Meteor.user()){
     return true;
    }
  },
  remove: function (userId, doc) {
    // console.log("doc.userId ", doc.userId );
    // console.log("met_user ", userId );
    userCanDelete = doc.userId === userId;
    // console.log("userCanDelete ", userCanDelete );
    return userCanDelete;
  },
  update: function (userId, doc, fields, modifier) {
  // can only change your own documents
    userCanModify = doc.userId === userId;
    return userCanModify;
},


});
