projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	this.query = [];
	this.exercises = [];

	this.returnQuery = function(){
		return query;
	}

	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?is_main=True&limit=5');



  return this;
});