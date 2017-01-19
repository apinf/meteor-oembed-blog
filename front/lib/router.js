/*
Front paage
*/
FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'postsList'})
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
