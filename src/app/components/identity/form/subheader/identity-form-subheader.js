'use strict';

angular.module('esn.account-inbox')

  .component('identityFormSubheader', {
    template: require('./identity-form-subheader.pug'),
    bindings: {
      identityId: '@',
      onSave: '&',
      form: '<'
    }
  });
