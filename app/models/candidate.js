model = Astro.Class({
  name: 'Candidate',
  collection: Candidates,
  fields: {
    firstName: {
      type: 'string',
      validator: [
        Validators.minLength(1),
        Validators.maxLength(512)
      ]
    },
    secondName: {
      type: 'string',
      validator: [
        Validators.minLength(1),
        Validators.maxLength(512)
      ]
    },
    fatherName: {
      type: 'string',
      validator: [
        Validators.minLength(1),
        Validators.maxLength(512)
      ]
    },
    birthDate: {
      type: 'date'
    },
    createdAt: {
      type: 'date'
    }
  }
});

Namespace('App.Models').Candidate = model;
