(function(angular) {
  'use strict';

  angular.module('esn-frontend-account-inbox')
    .run(injectUserProfileTabsDirective);

  function injectUserProfileTabsDirective(dynamicDirectiveService) {
    var userIdentities = new dynamicDirectiveService.DynamicDirective(true, 'identities-tab', {
      attributes: [
        { name: 'ng-if', value: '$ctrl.canEdit' }
      ]
    });

    dynamicDirectiveService.addInjection('profile-tabs', userIdentities);
  }
})(angular);
