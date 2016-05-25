import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const collection = new Mongo.Collection('candidates');

collection.allow({
  insert: () =>  true,
  update: () =>  true,
  remove: () =>  true
});

const model = Class.create({
  name: 'Candidate',
  collection,
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
    lastName: {
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
      }],
      optional: true
    },
    birthDate: {
      type: Date
    }
  },
  methods: {
    fullName() {
      let name = `${this.firstName} ${this.lastName}`;
      if (this.fatherName) {
        name += ` ${this.fatherName}`;
      }
      return name;
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
