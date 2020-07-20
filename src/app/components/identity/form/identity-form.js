(function(angular) {
  'use strict';

  angular.module('esn-frontend-account-inbox')

    .component('identityForm', {
      template: require("./identity-form.pug"),
      bindings: {
        identity: '<',
        userId: '<'
      },
      controller: 'identityFormController'
    });

})(angular);
