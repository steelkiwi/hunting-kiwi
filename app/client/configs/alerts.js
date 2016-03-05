Meteor.startup(() => {
  sAlert.config({
    effect: 'bouncyflip',
    position: 'top-right',
    timeout: 1000,
    html: false,
    onRouteClose: true,
    stack: true
  });
});
