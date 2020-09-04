'use strict';

angular.module('esn.account-inbox')

  .component('inboxIdentities', {
    template: require('./identities.pug'),
    controller: 'identitiesController',
    bindings: {
      user: '<'
    }
  });
