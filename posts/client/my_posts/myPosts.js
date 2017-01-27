import { Posts } from '/posts/collection';

Template.myPostsList.onCreated(function bodyOnCreated() {
  this.subscribe('posts');
});

Template.myPostsList.helpers({
  posts () {
    return Posts.find({ userId: Meteor.userId() }, {sort: {createdAt: -1}}).fetch();
  }
});
