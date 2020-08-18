'use strict';

angular.module('esn.account-inbox', [
  'esn.session',
  'esn.configuration',
  'esn.async-action',
  'esn.i18n',
  'esn.subheader',
  'esn.summernote-wrapper',
  'esn.inbox.libs'
]);

require('esn-frontend-inbox/src/esn.inbox.libs/app/app.constants.js');
require('esn-frontend-inbox/src/esn.inbox.libs/app/services/inbox-restangular.service.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/subheader/subheader.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/esn.summernote.js');

require('./components/identities/subheader/identities-subheader.js');
require('./components/identities/tab/identites-tab.component.js');
require('./components/identities/identities.js');
require('./components/identities/identities.constants.js');
require('./components/identities/identities.controller.js');
require('./components/identities/identities');
require('./services/identities/users-identities-api-client.service.js');
require('./components/identities/identities.constants.js');
require('./components/identity/identity.js');
require('./components/identity/create/identity-create.controller.js');
require('./components/identity/edit/identity-edit.controller.js');
require('./components/identity/form/subheader/identity-form-subheader.js');
require('./components/identity/form/identity-form.js');
require('./components/identity/form/identity-form.controller.js');
require('./components/identity/remove/identity-remove.controller.js');
require('./components/identity/identity.controller.js');
