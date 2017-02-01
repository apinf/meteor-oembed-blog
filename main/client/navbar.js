/*
Handler for post insert nodal
*/
import { Accounts } from 'meteor/accounts-base';
Template.navbar.events({
  'click #add_post': function(e) {
    Modal.show("postsForm", {pageHeader: "Add new post item"})
  }
});
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
Accounts.onLogout(function () {
  FlowRouter.go('/');
});
