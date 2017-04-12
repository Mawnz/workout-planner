projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	this.query = [];
	this.exercises = [];
	this.equipment = [];
	this.categories = [];

	this.returnQuery = function(){
		return query;
	}

	//returns the exercise of given id
	this.getExercise = function(id){
		return $.grep(this.exercises, function(e){return e.id == id});
	}

  	this.getCategories = $resource('https://wger.de/api/v2/exercisecategory/');
  	this.getEquipment = $resource('https://wger.de/api/v2/equipment/')
	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/?language=2&status=2&limit=10');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?is_main=True&limit=1000');



  return this;
});
