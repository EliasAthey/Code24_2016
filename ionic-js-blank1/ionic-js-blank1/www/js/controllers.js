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

    };


    $scope.items = [{
      title: 'Shovel Driveway', 
      text: 'I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. I need a nigga to shovel my driveway. ',
      price: '20',
      distanceTo: '2.9',//in miles
    },{
      title: 'Mow Lawn',
      text: 'I need a someone to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. I need a nigga to mow my lawn. ',
      price: '10',
      distanceTo: '1.43',//in miles
    }];

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
    $scope.profiles = [{
        id: profiles.indexOf(this),
        name: 'Bob Sagit',
        email: 'collinfeight5@gmail.com',
        payment: '',
    }];
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

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