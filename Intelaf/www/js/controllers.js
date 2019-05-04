angular.module('starter.controllers', [])

.controller('CategoriesCtrl', function($scope) {

  //categories
  $scope.categoria = [
    "Telefonia",
    "Impresoras",
    "Gaming",
    "Computadoras",
    "Accesorios",
    "Componentes PC",
    "Muebles y Oficina",
    "Camaras"
  ];
  $scope.cat = [
  {
    nombre: 'Telefonia',
    icon: 'fas fa-mobile'
  },{
    nombre: 'Impresora',
    icon: 'fa fa-print'
  },{
    nombre:'Gaming',
    icon: 'fas fa-gamepad'
  },{
    nombre: 'Computadoras',
    icon: 'fas fa-laptop-code'
  },{
    nombre: 'Accesorios',
    icon: 'fas fa-keyboard'
  },{
    nombre: 'Componentes PC',
    icon: 'fab fa-steam-symbol'
  },{
    nombre: 'Muebles y Oficina',
    icon: 'far fa-building'
  },{
  nombre: 'Camaras',
  icon: 'fas fa-camera-retro'  
  






  }]


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
