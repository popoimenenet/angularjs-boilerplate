
// Initialize subdirectory angular application
const app = angular.module("app", ["ui.router"]);


// const value
const BASEDIR = "/home";  // this value is the subdirectory's name

app.config(function ($stateProvider, $urlRouterProvider) {

	// default route if everything else is invalid
	$urlRouterProvider.otherwise('/home');


	// route setup
	$stateProvider
	.state("view1", {
		url: '/view1',
		cache: false,
		templateUrl : BASEDIR + "/views/view.html",
		controller: "view1"
	})
	.state("view2", {
		url: '/view2',
		cache: false,
		templateUrl : BASEDIR + "/views/view.html",
		controller: "view2"
	})
})