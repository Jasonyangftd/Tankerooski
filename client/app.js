angular.module('tank', [
  'ui.router',
  'tank.directives',
  'tank.services',
  'tank.profile',
  'tank.welcome',
  'tank.auth',
  'ngResource',
  'ngCookies',
  'angular-parallax',
  'scrollto',
  'tank.famous',
  'famous.angular',
  'tank.initial',
  'tank.leaderBoard'
  ])

// Configure roots for app
.config(function($stateProvider, $httpProvider){
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<tank-login></tank-login>',
      controller: 'AuthController'
    })
    .state('signin', {
      url: '/signin',
      template: '<tank-signin></tank-signin>'
    })
    .state('profile', {
      url:'/profile',
      template: '<tank-profile></tank-profile>',
      controller: 'ProfileController'
    })
    .state('welcome', {
      url: '',
      template: '<tank-welcome></tank-welcome>',
      controller: 'WelcomeController'
    })
    .state('about',{
      url: '/about',
      template: '<tank-about></tank-about>'
    })
    .state('intro', {
      url: '/intro',
      templateUrl:"./views/intro.html",
      controller:'FamousController'
    })
    .state('initial', {
      url: '/initial',
      template: '<tank-initial></tank-initial>',
      controller: 'InitialController'
    })
    .state('leaderboard', {
      url:'/leaderboard',
      template: '<tank-leaderboard></tank-leaderboard>',
      controller: 'LeaderboardController'
    })
  
  $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens',function($window){
  //Attaches a JWT on every server request.
  var attach = {
    request: function(object){
      // var jwt = $window.localStorage.getItem('com.triumpet.token');
      // if(jwt){
      //   object.headers['x-access-token'] = jwt;
      // }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})


/* Ultimate goal
Have first page be index.html
  This is the page with the tank that will blow you away
  This will lead to the intro
  Will have a skip intro button
    This escape button will skip to profile page


*/