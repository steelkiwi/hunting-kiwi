const collection = new Mongo.Collection('candidates');

collection.allow({
  insert: function() {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function() {
    return true;
  }
});

Namespace('App.Collections').Candidates = collection;
