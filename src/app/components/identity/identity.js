'use strict';

angular.module('esn.account-inbox')

  .component('identity', {
    template: require('./identity.pug'),
    bindings: {
      identity: '<',
      canEdit: '<',
      user: '<'
    },
    controller: 'identityController'
  });
