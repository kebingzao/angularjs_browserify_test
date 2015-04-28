'use strict';
var angular = require('angular'),
        $ = angular.element;

$(document).ready(function () {
// 拉出我们所有我们需要的模块（控制器，服务，等等）
    var homeController = require('./controllers/homeController');
    var productsDataSource = require('./services/productsDataSource');

// 创建模块
    var app = angular.module('kbz', [require('angular-route')]);

// 配置路由
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

// 创建工厂服务
    app.factory('productsDataSource', productsDataSource);

// 创建控制器
    app.controller('HomeController', homeController);
    // 最后启动程序
    angular.bootstrap(document, ['kbz']);

    // 最后运行的时候，用使用browserify 编译成 build.js
    // browserify app.js > build.js
});
