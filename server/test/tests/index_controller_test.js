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
    it('Should return Post new crumbtrail', (done) => {
      rp({ uri: 'http://localhost:3000/crumbtrails',
        method: 'POST',
        body: {
          name: 'newly added trail',
          description: 'text for test trail 2',
          rating: 4,
          type: 'adventure',
          length: '26.3 miles',
          requires_money: 'no',
          start_Crumb: 2,
          end_Crumb: 7,
        },
        json: true,
      }).then((createdtrail) => {
        expect(createdtrail.data[0].name).to.equal('newly added trail');
        done();
      });
    });

// TODO: write new test because this one works but only once!
    // it('Should delete added crumbtrail', (done) => {
    //   rp({ uri: 'http://localhost:3000/crumbtrails/4',
    //     method: 'DELETE',
    //   }).then(() => {
    //     rp({ uri: 'http://localhost:3000/crumbtrails',
    //       method: 'GET' }).then((response) => {
    //         console.log(response,'respomse');
    //       }).catch((err)=> console.log(err));
    //     done();
    //   });
    // });
  }
}

module.exports = IndexControllerTest;
