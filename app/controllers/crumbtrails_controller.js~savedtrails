// 'use strict';

const Nodal = require('nodal');

const Crumbtrail = Nodal.require('app/models/crumbtrail.js');

class CrumbtrailsController extends Nodal.Controller {

  index() {
    Crumbtrail.query()
      .where(this.params.query)
      .join('crumb')
      .end((err, models) => {
        this.respond(err || models, [
          'id',
          'creator',
          'name',
          'description',
          'rating',
          'type',
          'length',
          'requires_money',
          'start_Crumb',
          'end_Crumb',
          'created_at',
          'updated_at',
          { crumb: ['crumbtrail_id',
            'name',
            'description',
            'order_Number',
            'geoId',
            'latitude',
            'longitude',
            'radius',
            'notification_id',
            'title',
            'small_icon',
            'open_app_on_click',
            'vibration',
            'data',
            'text',
            'image',
            'video',
            'aR'] },
        ]);
      });
  }
  show() {
    Crumbtrail.find(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }

  create() {
    Crumbtrail.create(this.params.body, (err, model) => {
      this.respond(err || model, ['id', 'name']);
    });
  }
  update() {
    Crumbtrail.update(this.params.route.id, this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  destroy() {
    Crumbtrail.destroy(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }

}

module.exports = CrumbtrailsController;
