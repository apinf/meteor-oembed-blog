import { Posts } from '/posts/collection';

Template.postsList.helpers({
  posts () {
    return Posts.find({}, {sort: {createdAt: -1}}).fetch();
  }
});

Template.myPostsList.helpers({
  posts () {
    return Posts.find({ userId: Meteor.userId() }, {sort: {createdAt: -1}}).fetch();
  }
});
