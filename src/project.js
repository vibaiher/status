function Project(title, description, id) {
  this.id = id;
  this.title = title;
  this.description = description;
};

Project.prototype.save_with = function (repo) {
  this.id = repo.save(this);
};

module.exports = Project;
