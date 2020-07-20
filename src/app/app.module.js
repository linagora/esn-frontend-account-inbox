
    'use strict';

    angular.module('esn-frontend-account-inbox', [
        'op.dynamicDirective',
        'esn.session',
        'esn.configuration',
        'esn.async-action',
        'esn.i18n',
        'esn.subheader',
        'linagora.esn.unifiedinbox',
    ]);

require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/app/app.js');
require('esn-frontend-inbox/src/linagora.esn.unifiedinbox/app/constants.js');
require('esn-frontend-common-libs/src/frontend/components/dynamic-directive/src/dynamic-directive.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/subheader/subheader.module.js');
require('./components/identities/subheader/identities-subheader.js');
require('./components/identities/tab/identites-tab.component.js');
require('./components/identities/identities.controller.js');
require('./services/identities/identities.service.js');
require('./services/identities/users-identities-api-client.service.js');
require('./components/identities/identities.js');
require('./components/identities/identities.constants.js');
require('./components/identities/identities.run.js');
require('./components/identity/identity.js');
require('./components/identity/create/identity-create.controller.js');
require('./components/identity/edit/identity-edit.controller.js');
require('./components/identity/form/subheader/identity-form-subheader.js');
require('./components/identity/form/identity-form.js');
require('./components/identity/form/identity-form.controller.js');
require('./components/identity/remove/identity-remove.controller.js');
require('./components/identity/identity.controller.js');

