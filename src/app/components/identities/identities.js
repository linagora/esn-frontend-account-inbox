(function(angular) {
  'use strict';

  angular.module('esn-frontend-account-inbox')

    .component('inboxIdentities', {
      template: require("./identities.pug"),
      controller: 'inboxIdentitiesController',
      bindings: {
        user: '<'
      }
    });

})(angular);
