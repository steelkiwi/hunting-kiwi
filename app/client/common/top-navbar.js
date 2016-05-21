import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { sAlert } from 'meteor/juliancwirko:s-alert';

Template.TopNavbar.events({
  'click [data-action="sign-in"]'(event) {
    event.preventDefault();
    Meteor.loginWithGoogle((error) => {
      if (error && !(error instanceof Accounts.LoginCancelledError)) {
        sAlert.error(error.reason);
      }
    });
  },
  'click [data-action="log-out"]'(event) {
    event.preventDefault();
    Meteor.logout();
  }
});
