(function () {
    'use strict';

    angular.module('seed.promo').config(function ($stateProvider) {
        $stateProvider
            .state('main.disaster', {
                url: '/disaster',
                templateUrl: 'app/scripts/pages/disaster/promo.view.html',
                controller: 'DisasterController',
                abstract: true
            });
    });

})();