(function(angular) {
  'use strict';

  angular.module('esn-frontend-account-inbox')

    .component('identityFormSubheader', {
      template: require("./identity-form-subheader.pug"),
      bindings: {
        identityId: '@',
        onSave: '&',
        form: '<'
      }
    });

})(angular);
