'use strict';

angular.module('global.$q', []).run(function ($q) {
  window.$q = $q;
});

beforeEach(angular.mock.module('global.$q'));
