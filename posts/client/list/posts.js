import { Posts } from '/posts/collection';

Template.postsList.helpers({
  posts (who) {
    // console.log("who = ", who);
    if (who === 'my') {
      return Posts.find({ userId: Meteor.userId() }, {sort: {createdAt: -1}}).fetch();
    }
    else {
      return Posts.find({}, {sort: {createdAt: -1}}).fetch();
    }
  }
});
