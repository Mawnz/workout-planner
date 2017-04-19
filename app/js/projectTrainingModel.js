projectTrainingApp.factory('Workout',function ($resource, $cookies) {

<<<<<<< HEAD
	this.query = [];
	this.exercises = [];
	this.myExerList = [];
	this.displayExer = [];
	this.show = false;


	// var searchFilters = ($cookies.get("filters") == undefined ? 2 : $cookies.get("filters"));
	var catFilter = $cookies.get('catFilter');
	var eqFilter = $cookies.get('eqFilter');

	this.myExerListCookieEdition = (
			($cookies.get("menu") == undefined) ||
=======
	query = [];
	exercises = [];
	myExerList = [];
	displayExer = [];
	show = false;
	msg = "";
	showMsg = false;

	myExerListCookieEdition = (
			($cookies.get("menu") == undefined) ||
>>>>>>> dafc0a22a69ba560e05854fcb9ddb95321b81c95
			($cookies.get("menu") == "") ? []	 : $cookies.getObject("menu")
		);

	var catFilter = ($cookies.get('catFilter') == undefined) ? 0 : $cookies.get('catFilter');
	var eqFilter = ($cookies.get('eqFilter') == undefined) ? 0 : $cookies.get('eqFilter');

	var cookie = $cookies;


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

	this.setMessage = function(msg){
		msg = msg;
		showMsg = true;
	}

	this.getMessage = function(){
		return msg;
	}

	this.getShowMsg = function(){
		return showMsg;
	}

	this.getCookie = function(){
		return cookie;
	}

	this.getMyCookieWorkout = function(){
		return myExerListCookieEdition;
	}

	this.setShow = function(boolean){
		show = boolean;
	}

	this.getShow = function(){
		return show;
	}

	this.setReps = function(myExercise, value){
		$.grep(myExerList, function(e){return e.id == myExercise.id})[0].reps = value;
	}

	this.setSet = function(myExercise, value){
		$.grep(myExerList, function(e){return e.id == myExercise.id})[0].set = value;
	}

	this.getReps = function(myExercise){
		return $.grep(myExerList, function(e){return e.id == myExercise.id})[0].reps;
	}

	this.getSet = function(myExercise){
		return $.grep(myExerList, function(e){return e.id == myExercise.id})[0].set;
	}

	this.getCatFilter = function(){
		return catFilter;
	}

	this.getEqFilter = function(){
		return eqFilter;
	}

	this.getMyWorkout = function(){
		return myExerList;
	}

	this.addToMyList = function(id, doIt){
		myExerList.push(this.getExercise(id));
		//handle if we already have a cookie so we don't add stuff twice, this is for when we load the page
		if(doIt){
			myExerListCookieEdition.push(id);
			cookie.putObject("menu", myExerListCookieEdition);
		}
	}

	this.getExerciseFromMyList = function(id){
		//returns your very exercise from the list
		return $.grep(myExerList, function(e){return e.id == id});
	}

	this.removeFromMyList = function(id){
		//a function that just removes the chosen exercise from your list
		var index = 0;
		for(var i in myExerList){
			if(myExerList[i].id == id) index = i;
		}
		myExerList.splice(index, 1);
		myExerListCookieEdition.splice(index, 1);
		cookie.putObject("menu", myExerListCookieEdition);
	}

<<<<<<< HEAD
	this.filterExercises = function(cat, eq, toogle){
		var newList = $.grep(this.exercises, function(e){
			return e.category == ((cat == 0) ? e.category : categories[cat]) &&
					e.equipment == ((eq == 0) ? e.equipment : equipment[eq]);
			});
		$cookies.putObject("catFilter", parseInt(cat));
		$cookies.putObject("eqFilter", parseInt(eq));
=======
	this.filterExercises = function(cat, eq){
		//creates a new list using the chosen filter
		var newList = $.grep(exercises, function(e){
			return e.category == ((cat == 0) ? e.category : categories[cat]) &&
					e.equipment == ((eq == 0) ? e.equipment : equipment[eq]);
			});
		//store the filters chosen in cookies
		$cookies.putObject("catFilter", parseInt(cat));
		$cookies.putObject("eqFilter", parseInt(eq));
		//set the new list to be displayed in results
>>>>>>> dafc0a22a69ba560e05854fcb9ddb95321b81c95
		this.setDisplayExer(newList);
	}

	this.setDisplayExer = function(list){
<<<<<<< HEAD
		this.displayExer = list;
		console.log(this.displayExer);
		return;
=======
		displayExer = list;

>>>>>>> dafc0a22a69ba560e05854fcb9ddb95321b81c95
	}

	this.getDisplayExer = function(){
		return displayExer;
	}

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
		}catch(err){
			//this is just error message
			//console.error("Couldn't find match for image")
		}
	}

	this.addExerciseToList = function (data) {
		for(var i in data){
			var cat = categories[data[i].category];
			var eq = equipment[data[i].equipment];
			exercises.push({
				id:data[i].id,
				description:data[i].description,
				name:data[i].name,
				image : ["img/noimg.png"],
				category : cat,
				equipment : eq == undefined ? "Not Specified" : eq,
				set : 1,
				reps : 1
			});
		}
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

	//these are not used but could be implemented, we opted to go for hard-coding them instead
  	this.getCategories = $resource('https://wger.de/api/v2/exercisecategory/');
  	this.getEquipment = $resource('https://wger.de/api/v2/equipment/')
  	//these are used
	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/');



  return this;
});
