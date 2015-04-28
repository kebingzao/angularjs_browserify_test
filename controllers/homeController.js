module.exports = ['$scope', 'productsDataSource', function ($scope, productsDataSource) {
    $scope.title = 'product page';
    $scope.productsDataSource= productsDataSource;
}];