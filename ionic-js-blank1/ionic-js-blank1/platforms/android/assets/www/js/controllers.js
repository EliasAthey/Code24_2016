angular.module('WOTO.controllers', [])

.controller('MainCtrl', function ($scope) { })

.controller('startCtrl', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('tabs/login.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.loginModal = modal;
    });
    $ionicModal.fromTemplateUrl('tabs/sign-up.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.supModal = modal;
    });
})