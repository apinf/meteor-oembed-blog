import { Posts } from './';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const postsSchema = new SimpleSchema({
  title: {
    type: String,
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
});

Posts.attachSchema(postsSchema);
