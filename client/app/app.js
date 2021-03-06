angular.module('spkr', [
  'spkr.auth',
  'spkr.feedback-form',
  'spkr.homepage',
  'spkr.previous-pres',
  'spkr.presentations',
  'spkr.services',
  'spkr.background',
  'spkr.reports',
  'ngRoute',
  'ui.bootstrap',
  'youtube-embed' 
  ]
) 

.config(function($routeProvider, $httpProvider) {
  $routeProvider
  //fix for signup and signin bug. background controller changed.
    .when('/', {
      templateUrl: 'app/auth/landing.html',
      controller: 'BackgroundController'
    })

    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })

    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })

    // .when('/landing', {
    //   templateUrl: 'app/auth/landing.html',
    //   controller: 'AuthController'
    // })

    .when('/about', {
      templateUrl: 'app/about/about.html'
    })

    .when('/feedback-form', {
      templateUrl: 'app/feedback-form/feedback-form.html',
      controller: 'FeedbackController'
    })

    .when('/feedback-form/:id', {
      templateUrl: 'app/feedback-form/feedback-form.html',
      controller: 'FeedbackController'
    })

    .when('/presentations', {
      templateUrl: 'app/presentations/presentations.html'
    })

    .when('/presentations/history/:id', {
      templateUrl: 'app/previous-pres/previousPres.html',
      controller: 'PrevPresController'
    })

    .when('/data-profile', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'HomepageController'
    })

    .when('/reports', {
      templateUrl: 'app/reports/reports.html',
      controller: 'ReportsController'
    })
    
    .when('/logout', {
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController',
      resolve:{ function (Auth){
        Auth.signout();
      }

      }
    })
    .otherwise('/data-profile')
    
});
