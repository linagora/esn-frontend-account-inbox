(function(angular) {
  'use strict';

  angular.module('esn-frontend-account-inbox')

    .component('identity', {
      template: require("./identity.pug"),
      bindings: {
        identity: '<',
        canEdit: '<',
        user: '<'
      },
      controller: 'identityController'
    });
})(angular);
