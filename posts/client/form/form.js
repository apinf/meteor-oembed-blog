import { Posts } from '../../collection';

Template.postsForm.helpers({
  postsCollection () {
    return Posts;
  },
  updateInsert () {
    const instance = Template.instance();
    if (instance.data.postItem) {
      return "update";
    }
    else {
      return "insert";
    }
  }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD');
});

AutoForm.addHooks(['postsForm'],{
  onSuccess: function(operation, result, template){
    $('#postInsertModal').modal('hide');
  }
})
