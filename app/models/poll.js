import { Class, Enum } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const collection = new Mongo.Collection('polls');

collection.allow({
  insert: () =>  true,
  update: () =>  true,
  remove: () =>  true
});

const Status = Enum.create({
  name: 'Status',
  identifiers: {
    CREATED: 'CREATED',
    PUBLISHED: 'PUBLISHED',
    CLOSED: 'CLOSED',
    CANCELED: 'CANCELED'
  }
});

const Type = Enum.create({
  name: 'Type',
  identifiers: {
    PUBLIC: 'PUBLIC',
    PRIVATE: 'PRIVATE'
  }
});

const model = Class.create({
  name: 'Poll',
  collection,
  behaviors: {
    timestamp: {}
  },
  field: {
    title: {
      type: String,
      validator: [{
        type: 'minLength',
        param: 3
      }, {
        type: 'maxLength',
        param: 256
      }]
    },
    status: {
      type: Status
    },
    type: {
      type: Type
    },
    createdBy: {
      type: Mongo.ObjectID,
      optional: true,
      immutable: true
    }
  },
  events: {
    beforeSave(e) {
      const doc = e.currentTarget;
      doc.status = Status.getIdentifier('CREATED');
    }
  }
});

export {
    collection as Polls,
    model as Poll
};
