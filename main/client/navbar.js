/*
Handler for post insert nodal
*/
import { Accounts } from 'meteor/accounts-base';
Template.navbar.events({
  'click #add_post': function(e) {
    Modal.show("postsForm")
  }
});
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
