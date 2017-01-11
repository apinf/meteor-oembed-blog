import { Posts } from '/posts/collection';

Template.postsList.helpers({
  posts () {
    return Posts.find().fetch();
  }
});
