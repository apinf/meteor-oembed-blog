Template.postItem.onRendered(function () {
  // Get reference to template instance
  const instance = this;

  // Get Post ID from template instance
  const postId = instance.data.post._id;

  // Get reference to post DOM element
  const postElement = instance.$(`#${postId}`);

  // Render OEmbed content
  postElement.oembed();
});
