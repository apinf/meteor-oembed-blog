// import { Posts } from '/posts/collection';
// import Posts from '/posts/collection';
// import { Meteor } from 'meteor/meteor';
// import { Template } from 'meteor/templating';
// import Posts from '/posts/collection';
// Template.myPostsList.onCreated(function() {
//  instance.subscribe('posts');
//  const instance = this;
//   // Set initial settings of pagination
//      instance.pagination = new Meteor.Pagination(Posts, {
//       // Count of cards in catalog
//       perPage: 4,
//       // Set sort by name on default
//       sort: { createdAt: -1 },
// });
//
// Template.myPostsList.helpers({
//   posts () {
//     // Return items of organization collection via Pagination
//     return Template.instance().pagination.getPage();
//   },
//   templatePagination () {
//     // Get reference of pagination
//     return Template.instance().pagination;
//   },
// });

// Template.myPostsList.helpers({
//   posts () {
//     return Posts.find({ userId: Meteor.userId() }, {sort: {createdAt: -1}}).fetch();
//   }
// });
import { Posts } from '/posts/collection';

Template.myPostsList.onCreated(function() {

  const instance = this;
  // Set initial settings of pagination
  instance.pagination = new Meteor.Pagination(Posts, {
    // Count of posts on page
    perPage: 4,
    // Set sort by creation datestamp on default
    sort: { createdAt: -1 },
  })
});

Template.myPostsList.helpers({
  posts () {
    // Return items of organization collection via Pagination
    return Template.instance().pagination.getPage();
  },
  templatePagination () {
    // Get reference of pagination
    return Template.instance().pagination;
  },
});
