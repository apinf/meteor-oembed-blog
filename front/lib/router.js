/*
Front paage
*/
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'frontPage'})
    }
});
/*
List user's own posts
*/
FlowRouter.route('/myposts', {
triggersEnter: [function (context) {
  if (Meteor.userId()) {
    // Set query parameter if it doesn't exist
    context.queryParams.filterBy = 'myposts';
  }
  }],
    action: function(params, queryParams) {
      if (Meteor.userId()){
        BlazeLayout.render('mainLayout', {content: 'myPostsList'})
      }
    }
});
