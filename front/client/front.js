// import { Posts } from '/posts/collection';
//
// Template.frontPage.onCreated(function bodyOnCreated() {
//   this.subscribe('posts');
// });
//



import { Posts } from '/posts/collection';

Template.frontPage.onCreated(function() {

 const instance = this;
  // Set initial settings of pagination
     instance.pagination = new Meteor.Pagination(Posts, {
      // Count of cards in catalog
      perPage: 4,
      // Set sort by name on default
      sort: { createdAt: -1 },
})
});
Template.frontPage.helpers({
  posts () {
    // Return items of organization collection via Pagination
    return Template.instance().pagination.getPage();
  },
  templatePagination () {
    // Get reference of pagination
    return Template.instance().pagination;
  },
});
