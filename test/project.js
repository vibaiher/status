var should = require('should');
var Project = require('../src/project.js');

describe('Project', function () {

  describe('#new()', function () {

    it('should initialize a new project', function () {
      var project = new Project('EducaPoker 5', 'A new theme');

      project.title.should.be.exactly('EducaPoker 5');
      project.description.should.be.exactly('A new theme');
    });

  });

});
