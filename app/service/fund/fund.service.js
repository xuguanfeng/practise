'use strict';

angular.module('service.fund').factory('Fund', ['$resource',
    function ($resource) {
        //return $resource('phones/:phoneId.json', {}, {
        return $resource('json/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }
]);
