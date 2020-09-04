'use strict';

require('../../../services/identities/identities.service.js');
require('../../identities/identities.constants.js');

angular.module('esn.account-inbox')
  .controller('identityCreateController', identityCreateController);

function identityCreateController(
  $rootScope,
  asyncAction,
  userId,
  identitiesService,
  INBOX_IDENTITIES_EVENTS
) {
  var self = this;

  self.init = init;
  self.onCreateBtnClick = onCreateBtnClick;

  function init() {
    self.userId = userId;
    self.identity = {};
  }

  function onCreateBtnClick() {
    return asyncAction({
      progressing: 'Creating identity...',
      success: 'Identity created',
      failure: 'Failed to create identity'
    }, function() {
      return _storeIdentity();
    });
  }

  function _storeIdentity() {
    return identitiesService.storeIdentity(self.identity, userId)
      .then(updatedIdentities => {
        $rootScope.$broadcast(INBOX_IDENTITIES_EVENTS.UPDATED, updatedIdentities);
      });
  }
}
