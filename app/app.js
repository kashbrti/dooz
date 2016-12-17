'use strict';

// Declare app level module which depends on views, and components
var app  = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]) ;

//url config
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {$locationProvider.hashPrefix('!');
        $routeProvider.when('/home' , { template: "<tab-view><tab-view>"}).

        otherwise({redirectTo: '/home'});
}]);

//==========================================================================
//the tab view to control the menu tabs job
app.directive("tabView" , function () {
    return {

        templateUrl:"html/tab-view.template.html" ,
        controller: function () {

                var self = this ;
                self.currentTab = 1 ;

                self.changeTab = function (id) {
                    self.currentTab = id ;
                    //alert("tab changed to" + id) ;
                };

                self.checkTab = function (id) {
                    if(self.currentTab == id)
                    {
                      return true ;
                    }
                    return false;
                } ;


        } ,
        controllerAs: "tabCtrl"
    };

});
//==============================================================================
//the announcement view
app.directive("announcementView" , function () {
    var ancs = {
        author: 'khashi' ,
        title: 'fuck this shit' ,
        content: 'fuck this shit even more' ,
        dateAnnounced: Date.now()
    } ;

  return {
    templateUrl:"html/announcement-view.template.html" ,
      controller: function () {


      //the test Announcement
        var self  = this ;

        self.announcements = ancs ;
      } ,
      controllerAs:"announcementCtrl"
  };



});

//=====================================================================================
//the login page directive
app.directive("loginView" , function () {

  return {
      templateUrl: "html/login-view.template.html" ,
      controller: function () {
          var self = this;
          self.username = "" ;
          self.password = "" ;

          //do the authentication here
          self.authenticate = function () {

          }

      } ,

      controllerAs:"loginCtrl"

  } ;
});



//===========================================================================================
//the directive for handling the registration event
app.directive("registerView" , function () {
      return {

         templateUrl:"html/register.template.html" ,
          controller:function () {
              var self = this ;
              self.passWord = "" ;
              self.passWordConf = "" ;
              self.email = "" ;
              self.userName = "" ;


              self.register = function () {
                  //do the sign up here
              };

              self.isValid = function () {

                  if(self.passWord == self.passWordConf)
                  {
                    alert('valid auth') ;
                    self.register() ;
                  }
              }
          },

          controllerAs:"registerCtrl"
      }
});

//====================================================================================================
//the user profile menu and profile change and stuff
app.directive("profileView" , function () {
    return {

        templateUrl: "html/profile-view.template.html" ,
        controller: function () {
            var self = this ;
            self.currentTab = 1 ;

            self.changeTab = function (id) {
                self.currentTab = id ;
                //alert("tab changed to" + id) ;
            };

            self.checkTab = function (id) {
                if(self.currentTab == id)
                {
                    return true ;
                }
                return false;
            } ;

        } ,
        controllerAs: "profileCtrl"
    }
}) ;

//===============================================================================================================
app.directive('codeView' , function () {
   return {
        templateUrl:"html/code-view.template.html" ,
        controller:function () {
          var self = this ;
          self.code = "this is a nice C++ code !" ;

        } ,
       controllerAs:"codeCtrl"
   } ;
});



app.directive('rankingView' , function () {
  var team1 = {
    name:"khashi's team" ,
      score:1200
  };
  return {
          templateUrl:"html/ranking-view.template.html" ,
          controller: function () {
                var self = this ;
                self.team = team1 ;
          } ,

          controllerAs:"rankingCtrl"
    } ;
});




app.controller("MainController" , function (){

}) ;