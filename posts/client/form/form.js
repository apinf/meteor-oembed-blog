import { Posts } from '../../collection';

Template.postsForm.helpers({
  postsCollection () {
    return Posts;
  }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD');
});


  AutoForm.addHooks(['postsForm'],{
    onSuccess: function(operation, result, template){
      // console.log("Autoclosemodal");
      $('#postInsertModal').modal('hide');
    }
  })
