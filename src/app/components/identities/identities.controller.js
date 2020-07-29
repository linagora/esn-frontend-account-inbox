'use strict';

require('../../services/identities/identities.service')
require('./identities.constants.js')

angular.module('esn.account-inbox')
  .controller('identitiesController', function (
    $q,
    $modal,
    $scope,
    identitiesService,
    INBOX_IDENTITIES_EVENTS
  ) {
    var self = this;

    self.$onInit = $onInit;
    self.openCreateForm = openCreateForm;

    function $onInit() {
      self.status = 'loading';

      $q.all([
        identitiesService.canEditIdentities(),
        identitiesService.getAllIdentities(self.user._id)
      ])
        .then(function (results) {
          self.status = 'loaded';
          self.canEdit = results[0];
          self.identities = results[1];

          $scope.$on(INBOX_IDENTITIES_EVENTS.UPDATED, onUpdatedIdentitiesEvent);
        })
        .catch(function () {
          self.status = 'error';
        });
    }

    function onUpdatedIdentitiesEvent(event, updatedIdentities) {

      self.identities = updatedIdentities;
    }

    function openCreateForm() {
      $modal({
        template: require("../identity/create/identity-create.pug"),
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'identityCreateController',
        locals: {
          userId: self.user._id
        }
      });
    }
  });

