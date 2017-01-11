import { Posts } from './';

Posts.allow({
  insert () {
    return true;
  }
});
