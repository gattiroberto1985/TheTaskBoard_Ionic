angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('ideasPage', {
    url: '/fasks',
    templateUrl: 'templates/ideasPage.html',
    controller: 'ideasPageCtrl'
  })

  .state('menu.projectDetails', {
    url: '/projectDetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projectDetails.html',
        controller: 'projectDetailsCtrl'
      }
    }
  })

  .state('menu.projectsList', {
    url: '/projects',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projectsList.html',
        controller: 'projectsListCtrl'
      }
    }
  })

  .state('menu.projectNotes', {
    url: '/prjNotes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projectNotes.html',
        controller: 'projectNotesCtrl'
      }
    }
  })

  .state('menu.projectHistory', {
    url: '/prjHistory',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projectHistory.html',
        controller: 'projectHistoryCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/projects')

  

});