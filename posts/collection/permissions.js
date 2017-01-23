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

});
