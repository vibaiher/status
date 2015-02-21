var request = require('supertest');
var app = require('../app');

describe('Status', function () {
  it('lets you to create a project', function(done) {
    var project = { title : 'EducaPoker 5', description : 'New theme for EducaPoker site' };

    request(app)
      .post('/projects')
      .send(project)
      .expect(201, done);
  });
});
