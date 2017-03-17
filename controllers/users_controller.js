'use strict';

const Nodal = require('nodal');

const User = Nodal.require('app/models/user.js');

class UsersController extends Nodal.Controller {

  index() {
    User.query()
      .where(this.params.query)
      .join('trail')
      .join('savedtrail')
      .end((err, models) => {
        this.respond(err || models, [
          'username',
          'points',
          'total_completed',
          'current_trail',
          'profile_picture',
          { trail: ['id'] },
          { savedtrail: ['id'] },
        ]);
      });
  }
  show() {
    User.find(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }
  create() {
    User.create(this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  update() {
    User.update(this.params.route.id, this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  destroy() {
    User.destroy(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }
}

module.exports = UsersController;
