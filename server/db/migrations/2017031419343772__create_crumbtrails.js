'use strict';

const Nodal = require('nodal');

class CreateCrumbtrails extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017031419343772;
  }

  up() {
    return [
      this.createTable('crumbtrails', [
        { name: 'user_id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'rating', type: 'int' },
        { name: 'type', type: 'string' },
        { name: 'length', type: 'string' },
        { name: 'requires_money', type: 'string' },
        { name: 'start_Crumb', type: 'int' },
        { name: 'end_Crumb', type: 'int' },
      ]),
    ];
  }

  down() {
    return [
      this.dropTable('crumbtrails'),
    ];
  }

}

module.exports = CreateCrumbtrails;
