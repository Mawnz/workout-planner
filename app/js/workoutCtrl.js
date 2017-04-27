projectTrainingApp.controller('WorkoutCtrl', function ($scope,Workout, $sce) {
	$scope.myWorkout = Workout.getMyWorkout();
	$scope.open = true;

	$scope.toggleShow = function($event){
		var icon = $($event.currentTarget).find("#icon");
		var div = $($event.currentTarget).parent().prev();
		if(icon.html() == "keyboard_arrow_up"){
			icon.html("keyboard_arrow_down");
			div.attr("class", "md-body-1 slideUp")
		}else{
			icon.html("keyboard_arrow_up");
			div.attr("class", "md-body-1 slideDown")
		}
		/*
		//toggle slide 
		
		div.slideToggle('slow');
*/
	}
});

