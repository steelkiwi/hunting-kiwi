AccountsTemplates.configure({
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,
  sendVerificationEmail: false,
  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
