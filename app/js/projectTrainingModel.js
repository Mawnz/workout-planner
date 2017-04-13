projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	var query = [];
	var exerciseList = [];

	this.returnQuery = function(){
		return query;
	}

	this.addImageToList = function(data){
		for(var i in exerciseList){
			if(exerciseList[i].id = data.exercise){
				exerciseList[i].image = data.image;
			}
		}
		return;
	}

	this.addExerciseToList = function (data) {
		for(var i in data){
			exerciseList.push({
				id:data[i].id,
				category:data[i].category,
				description:data[i].description,
				name:data[i].name
			});
		}
		return;
	}

	this.removeFromList = function (id){
		for(var i in exerciseList){
			if(exerciseList[i].id = id) index = i;
		}
		exerciseList.splice(index,1);
	}

	this.getExerciseList = function(){
		return exerciseList;
	}

	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/?language=2&status=2&limit=100');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?ismain=True');

  return this;

});
