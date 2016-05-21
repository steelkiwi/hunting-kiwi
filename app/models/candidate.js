import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const collection = new Mongo.Collection('candidates');

collection.allow({
  insert: () =>  true,
  update: () =>  true,
  remove: () =>  true,
});

const model = Class.create({
  name: 'Candidate',
  collection: collection,
  fields: {
    firstName: {
      type: String,
      validator: [{
        type: 'minLength',
        param: 1
      }, {
        type: 'maxLength',
        param: 512
      }]
    },
    secondName: {
      type: String,
      validator: [{
        type: 'minLength',
        param: 1
      }, {
        type: 'maxLength',
        param: 512
      }]
    },
    fatherName: {
      type: String,
      validator: [{
        type: 'minLength',
        param: 1
      }, {
        type: 'maxLength',
        param: 512
      }]
    },
    birthDate: {
      type: Date
    },
    createdAt: {
      type: Date
    }
  },
  behaviors: {
    timestamp: {}
  }
});

export {
    collection as Candidates,
    model as Candidate
};
