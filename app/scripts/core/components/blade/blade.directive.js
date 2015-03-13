(function () {
    'use strict';
    angular.module('seed.core.components.blade').directive('seedBlade', function () {
        return {
            restrict: 'E',
            scope: {
                seedConfiguration: '='
            },
            transclude: true,
            templateUrl: 'app/scripts/core/components/blade/blade.view.html'
        }
    });
})();