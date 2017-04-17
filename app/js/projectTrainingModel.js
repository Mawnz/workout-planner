projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	var query = [];
	var exercises = [];

	var equipment = [];
	var categories = {
		10 : "Abs",
		8 : "Arms",
		12 : "Back",
		14 : "Calves",
		11 : "Chest",
		9 : "Legs",
		13 : "Shoulders"
	};

	this.returnQuery = function(){
		return query;
	}

	this.emptyList = function(){
		exercises = [];
	}

	this.addImageToList = function(data){
		try{
			var e = this.getExercise(data.exercise);
			if(e.image[0] == "img/noimg.png") e.image = [];
			e.image.push(data.image);
		}catch(err){console.error("Couldn't find match for image")}
	}

	this.addExerciseToList = function (data) {
		for(var i in data){
			var cat = categories[data[i].category];
			exercises.push({
				id:data[i].id,
				category:data[i].category,
				description:data[i].description,
				name:data[i].name,
				image : ["img/noimg.png"],
				category : cat
			});
		}
		return;
	}

	this.removeFromList = function (id){
		for(var i in exercises){
			if(exercises[i].id = id) index = i;
		}
		exercises.splice(index,1);
	}

	this.getExercises = function(){
		return exercises;
	}

	//returns the exercise of given id
	this.getExercise = function(id){
		//JQuery function $.grep
		return $.grep(exercises, function(e){return e.id == id})[0];
	}

	//different resources to get information from the API
  	this.getCategories = $resource('https://wger.de/api/v2/exercisecategory/');
  	this.getEquipment = $resource('https://wger.de/api/v2/equipment/')
	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/');



  return this;
});
