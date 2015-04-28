'use strict';
var angular = require('angular'),
        $ = angular.element;

$(document).ready(function () {
// ������������������Ҫ��ģ�飨�����������񣬵ȵȣ�
    var homeController = require('./controllers/homeController');
    var productsDataSource = require('./services/productsDataSource');

// ����ģ��
    var app = angular.module('kbz', [require('angular-route')]);

// ����·��
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
                .when('/home',
                {
                    templateUrl: 'tpl/product.html',
                    controller: 'HomeController'
                })
                .otherwise(
                {
                    redirectTo: '/home'
                });
    }]);

// ������������
    app.factory('productsDataSource', productsDataSource);

// ����������
    app.controller('HomeController', homeController);
    // �����������
    angular.bootstrap(document, ['kbz']);

    // ������е�ʱ����ʹ��browserify ����� build.js
    // browserify app.js > build.js
});
