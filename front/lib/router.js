function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/')
  }
}


/*
Front paage
*/
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'frontPage'})
    }
});

/*
Insert new post
*/
FlowRouter.route('/new', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'insertPage'})
    }
});

/*
List user's own posts
*/
FlowRouter.route('/myposts', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'myPostsList'})
    }
});
