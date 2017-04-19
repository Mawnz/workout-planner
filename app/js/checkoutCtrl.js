projectTrainingApp.controller('CheckoutCtrl', function ($scope,Workout, $sce) {
	$scope.eMenu = Workout.getMyWorkout();

	$scope.download = function(){
		var printDoc = new jsPDF();
    	printDoc.fromHTML($('#printMe').get(0), 10, 10, {'width': 180});
   		printDoc.autoPrint();
   		printDoc.output("dataurlnewwindow");
		/*
		var doc = new jsPDF();
		var elementHandler = {
			'#editor': function(element, renderer){
				return true;
			}
		};
		var source = $("#printMe")[0];

		doc.fromHTML(
			source,
			15, 
			15, 
			{
				width: 180, 
				"elementHandlers": elementHandler
			});

		doc.output("dataurlnewwindow");	
		*/
	}

});

