(function () {
    'use strict';
    angular.module('seed.promo').controller('PromoController', function ($scope, $swipe) {

        /*$swipe.bind(angular.element(document), {
            start: function(){
                console.log('this is swipe start ');
            },

            end: function(){
                console.log('this is swipe end');
            }
        });*/

        $scope.leftBladeConfiguration = {
            expanded: true,
            side: 'left'
        }

    });
})();