(function(angular) {
  'use strict';

  angular.module('esn-frontend-account-inbox')
    .constant('INBOX_IDENTITIES_EVENTS', {
      UPDATED: 'inbox:identities:updated'
    });
})(angular);
