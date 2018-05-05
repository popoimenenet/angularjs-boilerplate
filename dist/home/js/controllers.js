
// Side Navigation controller
app.controller("route-controller", function ($scope, $state) {

	// Navigation setup
	$scope.NavigateToState = function (StateName) {

		// the switch will move to predefined state.
		switch (StateName) {
			case "view1":
				$state.go(StateName);
				break;
			case "view2":
				$state.go(StateName);
				break;
			default:
				console.error("State is unknown")
				break;
		}

	}

})



// ui-view controller -view1
app.controller("view1", function ($scope, $state) {
	$scope.VariableA = "This is view1"
})


// ui-view controller - view2
app.controller("view2", function ($scope, $state) {
	$scope.VariableA = "This is view2"
})