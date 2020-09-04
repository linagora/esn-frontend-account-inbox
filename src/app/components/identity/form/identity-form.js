'use strict';

angular.module('esn.account-inbox')

  .component('identityForm', {
    template: require('./identity-form.pug'),
    bindings: {
      identity: '<',
      userId: '<'
    },
    controller: 'identityFormController'
  });
