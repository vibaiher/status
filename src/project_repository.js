function ProjectRepository(collection) {
  this.collection = collection;
};

ProjectRepository.prototype.all = function() {
  var projects = [];

  this.collection.find().toArray(function(err, result) {
    if (err) throw err;
    projects = result;
  });

  return projects;
};

ProjectRepository.prototype.save = function(project) {
  return this.collection.insert(project);
};

module.exports = ProjectRepository;
