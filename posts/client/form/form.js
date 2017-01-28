import { Posts } from '../../collection';

Template.postsForm.helpers({
  postsCollection () {
    return Posts;
  },
  updateInsert () {
    const instance = Template.instance();
    // console.log("ins.d.p=[", instance.data.postItem, "]");
    if (instance.data.postItem) {
      return "update";
    }
    else {
      return "insert";
    }
  }
});
// Displaying create datestamp as tooltip
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD HH:mm');
});

// Calculate time passed from create
Template.registerHelper('calculateFromDate', function(date) {
  // return moment(date).format('YYYY-MM-DD HH:mm');
  return moment(date).from(moment());
});


AutoForm.addHooks("postsForm",{
  onSuccess: function(){
    Modal.hide("postInsertModal");
  }
})
