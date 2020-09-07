'use strict';

const noop = angular.noop;

angular.module('esn.inbox.libs', [])
  .service('jmapDraft', noop)
  .filter('sanitizeStylisedHtml', function() {
    return noop;
  });
angular.module('linagora.esn.unifiedinbox', []);
