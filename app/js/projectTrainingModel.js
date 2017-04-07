projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	var query = [];
	var searchedExercises = [];
	var searchedExercisesId = [];
	var searchedExercisesName = []

	this.returnQuery = function(){
		return query;
	}

	this.addToSearched = function(result){
		searchedExercises = []
		searchedExercisesId = []
		searchedExercisesName = []

		for(var i in result){
			searchedExercises.push(result[i]);
			searchedExercisesId.push(result[i].id);
			searchedExercisesName.push(result[i].name);
		}
		console.log(searchedExercisesName);
	}

	this.getExerciseName = function(){
		return searchedExercisesName;
	}

	this.getExerciseId = function(){
		return searchedExercisesId;
	}

	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/?limit=10&language=2');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?is_main=True&limit=10');



  return this;
});
