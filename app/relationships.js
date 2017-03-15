// 'use strict';

// const Nodal = re wquire('nodal');

/* Include this file to enable Model relationships */

/* For example...

  const Post = Nodal.require('app/models/post.js');
  const Comment = Nodal.require('app/models/comment.js');

  Comment.joinsTo(Post, {multiple: true});

*/
const Crumb = Nodal.require('/app/models/crumb.js');
const Crumbtrail = Nodal.require('/app/models/crumbtrail.js');
Crumbtrail.joinedBy(Crumb, { multiple: true });

module.exports = {}; // Don't need to export anything
