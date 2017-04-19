projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	this.query = [];
	var exercises = [];
	this.equipment = [];
	this.categories = [];
	this.myExerList = [];
	this.displayExer = [];

	this.returnQuery = function(){
		return query;
	}

	this.emptyList = function(){
		exercises = [];
	}

	this.getMyWorkout = function(){
		return this.myExerList;
	}

	this.addToMyList = function(id){
		for(var i in exercises){
			if(exercises[i].id == id){
				this.myExerList.push(exercises[i]);
			}
		}
		console.log(this.myExerList);
		return this.myExerList;
	}

	this.filterExercises = function(cat,eq){
		var filterList = [];
		if(cat != null && eq != null){
			for(var i in exercises){
				for(var j in exercises[i].equipment){
					if(exercises[i].category == cat && exercises[i].equipment[j] == eq){
						filterList.push(exercises[i]);
					}
				}
			}
		}else if(cat != null && eq == null){
			for(var i in exercises){
				if(exercises[i].category == cat){
					filterList.push(exercises[i]);
				}
			}
		}else if(cat == null && eq != null){
			for(var i in exercises){
				for(var j in exercises[i].equipment){
					if(exercises[i].equipment[j] == eq){
						filterList.push(exercises[i]);
					}
				}
			}
		}else if(cat == null && eq == null) {
			filterList.push(exercises);
		}
		this.addToDisplayExer(filterList);
		return filterList;
	}

	this.addToDisplayExer = function(list){
		this.displayExer = [];
		for(var i in list){
			this.displayExer.push(list[i]);
		}
		console.log(this.displayExer);
		return;
	}

	this.getDisplayExer = function(){
		return this.displayExer;
	}

	this.removeFromMyList = function(id){
		for(var i in this.myExerList){
			if(this.myExerList[i].id == id){
				index = [i];
				this.myExerList.splice(index,1);
			}
		}
		console.log(this.myExerList);
		return this.myExerList;
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
				exercises.push({
					id:data[i].id,
					category:data[i].category,
					description:data[i].description,
					equipment:data[i].equipment,
					name:data[i].name,
					image : ["img/noimg.png"]
				});
		}
		return;
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
