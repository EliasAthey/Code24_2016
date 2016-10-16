angular.module('WOTO.controllers', [])

.controller('MainCtrl', function ($scope, $ionicModal, $state, $ionicTabsDelegate) {
    //post a job modal
    $ionicModal.fromTemplateUrl('tabs/main/postJob.html', {
        scope: $scope,
        state: $state,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.postJobModal = modal;
    });

    //profile modal
    $ionicModal.fromTemplateUrl('tabs/main/profile.html', {
        scope: $scope,
        state: $state,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.profileModal = modal;
    });

    //swiping between tabs
    $scope.selectTabWithIndex = function (index) {
        $ionicTabsDelegate.animation = 'slide';
        $ionicTabsDelegate.select(index);
 
    }

    $scope.jobs = [
        {
            'title':'Lawn mowing needed', 'Pay': '15.00', '(x,y)': '.5 miles'
        },
        {
            'title':'Driveway Clearing', 'Pay': '25.00', '(x,y)': '.7'
        }
    ]

})

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