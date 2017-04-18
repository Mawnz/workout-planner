projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	this.query = [];
	this.exercises = [];
	this.myExerList = [];
	this.equipment = [];
	this.displayExer = [];
	var categories = {
		10 : "Abs",
		8 : "Arms",
		12 : "Back",
		14 : "Calves",
		11 : "Chest",
		9 : "Legs",
		13 : "Shoulders"
	};

	this.getMyWorkout = function(){
		return this.myExerList;
	}

	this.addToMyList = function(id){
		this.myExerList.push(this.getExercise(id));
		return this.myExerList;
	}


	this.removeFromMyList = function(id){
		var index = 0;
		for(var i in this.myExerList){
			if(this.myExerList[i].id == id) index = i;
		}
		this.myExerList.splice(index, 1);
		return this.myExerList;
	}

	this.filterExercises = function(cat){
		//I merged the filter exercises and add to display exercises functions
		this.displayExer = this.getExercisesByCategory(cat);
		return;
	}

	this.setDisplayExer = function(list){
		this.displayExer = list;
	}

	this.getDisplayExer = function(){
		return this.displayExer;
	}

	this.returnQuery = function(){
		return this.query;
	}

	this.emptyList = function(){
		this.exercises = [];
	}

	this.addImageToList = function(data){
		try{
			var e = this.getExercise(data.exercise);
			if(e.image[0] == "img/noimg.png") e.image = [];
			e.image.push(data.image);
		}catch(err){console.error("Couldn't find match for image")}
	}

	this.addExerciseToList = function (data) {
		console.log(categories[10]);
		for(var i in data){
			var cat = categories[data[i].category];
			
			this.exercises.push({
				id:data[i].id,
				description:data[i].description,
				name:data[i].name,
				image : ["img/noimg.png"],
				category : cat,
				sets : 1,
				reps : 1
			});
		}
		return;
	}

	this.getExercises = function(){
		return this.exercises;
	}

	//returns the exercise of given id
	this.getExercise = function(id){
		//JQuery function $.grep
		return $.grep(this.exercises, function(e){return e.id == id})[0];
	}

	this.getExercisesByCategory = function(category){
		//JQuery function $.grep that returns a list of all matches
		return $.grep(this.exercises, function(e){return e.category == category});
	}

	//different resources to get information from the API
  	this.getCategories = $resource('https://wger.de/api/v2/exercisecategory/');
  	this.getEquipment = $resource('https://wger.de/api/v2/equipment/')
	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/');



  return this;
});
