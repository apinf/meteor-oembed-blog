import { Posts } from './';

Posts.allow({
  insert () {
    if (Meteor.user()){
     return true;
    }
  }
});
