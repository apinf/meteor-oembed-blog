FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'postsList'})
    }
});

FlowRouter.route('/new', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'postsForm'})
    }
});
