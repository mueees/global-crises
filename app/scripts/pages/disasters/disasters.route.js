(function () {
    'use strict';

    angular.module('seed.promo').config(function ($stateProvider) {
        $stateProvider
            .state('main.disasters', {
                url: '/disasters',
                templateUrl: 'app/scripts/pages/disasters/disasters.view.html',
                controller: 'DisastersController'
            });
    });

})();