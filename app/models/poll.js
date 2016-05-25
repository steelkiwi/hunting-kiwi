import { Class, Enum } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const polls = new Mongo.Collection('polls');

polls.allow({
  insert: () =>  true,
  update: () =>  true,
  remove: () =>  true
});

const status = Enum.create({
  name: 'PollStatus',
  identifiers: {
    CREATED: 'CREATED',
    PUBLISHED: 'PUBLISHED',
    CLOSED: 'CLOSED',
    CANCELED: 'CANCELED'
  }
});

const type = Enum.create({
  name: 'PollType',
  identifiers: {
    PUBLIC: 'PUBLIC',
    PRIVATE: 'PRIVATE'
  }
});

const question = Class.create({
  name: 'PollQuestion',
  fields: {
    title: {
      type: String,
      validator: [{
        type: 'minLength',
        param: 3
      }, {
        type: 'maxLength',
        param: 256
      }],
      answers: [Mongo.ObjectID]
    },
  }
});

const poll = Class.create({
  name: 'Poll',
  collection: polls,
  behaviors: {
    timestamp: {}
  },
  fields: {
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
      type: status
    },
    type: {
      type: type
    },
    createdBy: {
      type: Mongo.ObjectID,
      optional: true,
      immutable: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    questions: {
      type: [question]
    }
  },
  events: {
    beforeSave(e) {
      const doc = e.currentTarget;
      doc.status = status.getIdentifier('CREATED');
    }
  }
});

export {
  polls as Polls,
  status as PollStatus,
  type as PollType,
  question as PollQuestion,
  poll as Poll
};
