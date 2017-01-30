// import { Mongo } from 'meteor/mongo';
// const Posts = new Mongo.Collection('posts');
// new Meteor.Pagination(Posts);
// export { Posts };
//
// // if (Meteor.isServer) {
// //   // This code only runs on the server
// //   Meteor.publish('posts', function postsPublication() {
// //     return Posts.find();
// //   });
// // }
// if (Meteor.isServer) {
//   // This code only runs on the server
// new Meteor.Pagination(Posts);
// }
// index.js file here.....
import { Mongo } from 'meteor/mongo';
const Posts = new Mongo.Collection('posts');
export { Posts };

if (Meteor.isServer) {
  // This code only runs on the server
new Meteor.Pagination(Posts);
}
