projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	var query = [];
	var searchedExercises = [];
	var searchedExercisesId = [];
	var searchedExercisesImage = [];

	this.returnQuery = function(){
		return query;
	}

	this.addToSearched = function(result){
		searchedExercises = []
		searchedExercisesId = []
		searchedExercisesImage = [];

		for(var i in result){
			searchedExercises.push(result[i]);
			searchedExercisesId.push(result[i].id);

			this.ExerciseImages.get({exercise : result[i].id}, function(data){
				for(var j in data.results){
					searchedExercisesImage.push(data.results[j].image);
				}				
			});
		}
		console.log(searchedExercisesImage);
	}

	this.getExercises = function(){
		return searchedExercises;
	}

	this.getExercisesId = function(){
		return searchedExercisesId;
	}

	this.getExercisesImage = function(){
		return searchedExercisesImage;
	}

	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/?limit=10&language=2');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?is_main=True');



  return this;
});
