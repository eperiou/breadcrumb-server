// 'use strict';

const Nodal = require('nodal');

const User = Nodal.require('app/models/user.js');

class Crumbtrail extends Nodal.Model {}

Crumbtrail.setDatabase(Nodal.require('db/main.js'));
Crumbtrail.setSchema(Nodal.my.Schema.models.Crumbtrail);
Crumbtrail.joinsTo(User, { multiple: true, as: 'crumbtrail' });

module.exports = Crumbtrail;
