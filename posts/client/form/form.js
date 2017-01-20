import { Posts } from '../../collection';

Template.postsForm.helpers({
  postsCollection () {
    return Posts;
  }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD');
});
