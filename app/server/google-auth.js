import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration';
import { AccountsServer } from 'meteor/accounts-base'

// Configure GoogleAuth service
const conf = Meteor.settings.googleAuth;
if (!conf) {
  throw new Meteor.Error('Google auth wasn\'t configured!');
}
ServiceConfiguration.configurations.remove(_.pick(conf, 'service'));
ServiceConfiguration.configurations.insert(conf)

// Allow to use only SteelKiwi domain
Accounts.validateNewUser((user) => {
  const email = user.services.google.email;
  const allowedDomain = email.endsWith(conf.allowedDomain);
  if (allowedDomain) {
    return true;
  }
  const errMsg = `Please use an emails from the ${conf.allowedDomain} domain.`;
  throw new Meteor.Error(403, errMsg);
});
