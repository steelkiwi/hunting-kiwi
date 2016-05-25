import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';

const profile = Class.create({
  name: 'UserProfile',
  fields: {
    name: String
  }
});

const services = Class.create({
  name: 'UserServices',
  fields: {
    google: Object
  }
});

const user = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    services: {
      type: services
    },
    profile: {
      type: profile
    }
  }
});

if (Meteor.isServer) {
  user.extend({
    fields: {
      createdAt: {
        type: Date
      }
    }
  });
}

export {
  profile as UserProfile,
  services as UserServices,
  user as User
};
