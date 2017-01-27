import { Posts } from '/posts/collection';

Template.frontPage.helpers({
  posts () {
    return Posts.find({}, {sort: {createdAt: -1}}).fetch();
  }
});
