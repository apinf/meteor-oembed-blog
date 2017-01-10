import { Posts } from '../../collection';

Template.postsForm.helpers({
  postsCollection () {
    return Posts;
  }
});
