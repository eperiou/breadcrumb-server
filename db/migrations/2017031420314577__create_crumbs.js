// 'use strict';

const Nodal = require('nodal');

class CreateCrumbs extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031420314577;
  }

  up() {
    return [
      this.createTable('crumbs', [
        { name: 'crumbtrail_id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'order_Number', type: 'int' },
        { name: 'geoId', type: 'string' },
        { name: 'latitude', type: 'int' },
        { name: 'longitude', type: 'int' },
        { name: 'radius', type: 'int' },
        { name: 'notification_id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'small_icon', type: 'string' },
        { name: 'open_app_on_click', type: 'boolean' },
        { name: 'vibration', type: 'int' },
        { name: 'data', type: 'string' },
        { name: 'text', type: 'text' },
        { name: 'image', type: 'string' },
        { name: 'video', type: 'string' },
        { name: 'aR', type: 'string' },
      ]),
    ];
  }

  down() {
    return [
      this.dropTable('crumbs'),
    ];
  }

}

module.exports = CreateCrumbs;
