var should = require('should');
var sinon = require('sinon');

var Project = require('../src/project.js');
var ProjectRepository = require('../src/project_repository.js');

describe('ProjectRepository', function() {

  describe('#save(Project)', function() {

    it('should insert a Project into the collection', function() {
      var collection = { insert: function() {} };
      var mock = sinon.mock(collection);
      var repo = new ProjectRepository(collection);

      mock.expects('insert').once();

      repo.save(new Project('Title', 'Description'));

      mock.verify();
    });

  });

  describe('#all()', function() {

    it('should return an empty array if not contains any project', function() {
      var collection = { find: function() { return { toArray: function() {} }; } };
      var repo = new ProjectRepository(collection);

      repo.all().should.be.a.array;
      repo.all().should.be.empty;
    });

    it('should return an array with all the saved projects', function() {
      var projects = [new Project('Title', 'Description'), new Project('Title 2', 'Description 2')];
      var collection = { find: function() { return { toArray: function(callback) { callback(undefined, projects); } }; } };
      var repo = new ProjectRepository(collection);

      repo.all().should.be.equal(projects);
    });

  });

});
