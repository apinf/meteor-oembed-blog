import { Posts } from '/posts/collection';

Template.frontPage.onCreated(function bodyOnCreated() {
  this.subscribe('posts');
});

Template.frontPage.helpers({
  posts () {
    return Posts.find({}, {sort: {createdAt: -1}}).fetch();
  }
});
