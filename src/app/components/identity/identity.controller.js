'use strict';

angular.module('esn.account-inbox')

  .controller('identityController', function(
    $modal
  ) {
    var self = this;

    self.onEditBtnClick = onEditBtnClick;
    self.onRemoveBtnClick = onRemoveBtnClick;

    /////

    function onEditBtnClick() {
      $modal({
        template: require('./edit/identity-edit.pug'),
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'identityEditController',
        locals: {
          identity: self.identity,
          userId: self.user._id
        }
      });
    }

    function onRemoveBtnClick() {
      $modal({
        template: require('./remove/identity-remove.pug'),
        backdrop: 'static',
        placement: 'center',
        controllerAs: '$ctrl',
        controller: 'identityRemoveController',
        locals: {
          identity: self.identity,
          userId: self.user._id
        }
      });
    }
  });
