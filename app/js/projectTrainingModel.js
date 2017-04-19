projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	this.query = [];
	this.exercises = [];
	this.myExerList = [];
	this.displayExer = [];
	this.show = false;

	// var searchFilters = ($cookies.get("filters") == undefined ? 2 : $cookies.get("filters"));
	var catFilter = $cookies.get('catFilter');
	var eqFilter = $cookies.get('eqFilter');



	var equipment = {
		1: "Barbell",
		8: "Bench",
		3: "Dumbbell",
		4: "Gym mat",
		9: "Incline bench",
		10: "Kettlebell",
		7: "none (bodyweight exercise)",
		6: "Pull-upp bar",
		5: "Swiss ball",
		2: "SZ-bar",
	}

	var categories = {
		10 : "Abs",
		8 : "Arms",
		12 : "Back",
		14 : "Calves",
		11 : "Chest",
		9 : "Legs",
		13 : "Shoulders"
	};

	this.setShow = function(boolean){
		this.show = boolean;
		return;
	}

	this.getShow = function(){
		return this.show;
	}

	this.setReps = function(myExercise, value){
		$.grep(this.myExerList, function(e){return e.id == myExercise.id})[0].reps = value;
		return;
	}

	this.setSet = function(myExercise, value){
		$.grep(this.myExerList, function(e){return e.id == myExercise.id})[0].set = value;
		return;
	}

	this.getCatFilter = function(){
		return catFilter;
	}

	this.getEqFilter = function(){
		return eqFilter;
	}

	this.getMyWorkout = function(){
		return this.myExerList;
	}

	this.addToMyList = function(id){
		this.myExerList.push(this.getExercise(id));
		return this.myExerList;
	}

	this.getExerciseFromMyList = function(id){
		return $.grep(this.myExerList, function(e){return e.id == id});
	}

	this.removeFromMyList = function(id){
		var index = 0;
		for(var i in this.myExerList){
			if(this.myExerList[i].id == id) index = i;
		}
		this.myExerList.splice(index, 1);
		return this.myExerList;
	}

	this.filterExercises = function(cat, eq){
		var newList = $.grep(this.exercises, function(e){
			return e.category == ((cat == 0) ? e.category : categories[cat]) &&
					e.equipment == ((eq == 0) ? e.equipment : equipment[eq]);
			});
		$cookies.putObject("catFilter", parseInt(cat));
		$cookies.putObject("eqFilter", parseInt(eq));				
		this.setDisplayExer(newList);

		return;
	}

	this.setDisplayExer = function(list){
		this.displayExer = list;
		console.log(this.displayExer);
		return;
	}

	this.getDisplayExer = function(){
		return this.displayExer;
	}

	this.returnQuery = function(){
		return this.query;
	}

	this.emptyList = function(){
		this.exercises = [];
		return;
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
			var eq = equipment[data[i].equipment];
			this.exercises.push({
				id:data[i].id,
				description:data[i].description,
				name:data[i].name,
				image : ["img/noimg.png"],
				category : cat,
				equipment : eq,
				set : 1,
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



	//different resources to get information from the API
  	this.getCategories = $resource('https://wger.de/api/v2/exercisecategory/');
  	this.getEquipment = $resource('https://wger.de/api/v2/equipment/')
	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/');



  return this;
});
