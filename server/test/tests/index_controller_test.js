// 'use strict';
const rp = require('request-promise');

const Nodal = require('nodal');
const Mocha = require('mocha');

const it = Mocha.it;

class IndexControllerTest extends Nodal.mocha.Test {

  test(expect) {
    it('Should return an HTTP 200', (done) => {
      this.endpoint('/').get((status) => {
        expect(status).to.equal(200);
        done();
      });
    });
    it('Should return emails of users from data', (done) => {
      rp('http://localhost:3000/users').then((users) => {
        expect(JSON.parse(users).data[0].username).to.equal('testuser1');
        done();
      });
    });
    it('Should return Description of crumbtrails from data', (done) => {
      rp('http://localhost:3000/crumbtrails').then((crumbtrails) => {
        expect(JSON.parse(crumbtrails).data[0].description).to.equal('text for test trail 1');
        done();
      });
    });
    it('Should return Text of crumbs from data', (done) => {
      rp('http://localhost:3000/crumbs').then((crumbs) => {
        expect(JSON.parse(crumbs).data[0].text).to.equal('text for crumb number 1 ');
        done();
      });
    });
  }
}

module.exports = IndexControllerTest;
