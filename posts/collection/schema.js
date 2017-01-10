import { Posts } from './';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const postsSchema = new SimpleSchema({
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
  },
});

Posts.attachSchema(postsSchema);
