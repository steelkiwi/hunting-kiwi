import { Meteor } from 'meteor/meteor';
import { sAlert } from 'meteor/juliancwirko:s-alert';

Meteor.startup(() => {
  sAlert.config({
    effect: 'bouncyflip',
    position: 'top-right',
    timeout: 3000,
    html: false,
    onRouteClose: true,
    stack: true,
    offset: 65
  });
});
