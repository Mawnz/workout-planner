projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	var query = [];
	var exerciseList = [];

	this.returnQuery = function(){
		return query;
	}

	this.addToExerciseList = function(result){

		this.ExerciseImages.get({}, function(data){
			for(var i = 0; i < data.results.length; i=i+2){
				exerciseList.push({
					id:data.results[i].exercise,
					image:data.results[i].image
				});
			}
			console.log(exerciseList);
		});

		for(var j in exerciseList){
			console.log(exerciseList[j]);
			this.ExerciseSearch.get({id:exerciseList[j].id}, function(data){
				console.log(data.results);
				for(var k in data.results){
					exerciseList[j].name = data.results[k].name;
					exerciseList[j].description = data.results[k].description;
					exerciseList[j].category = data.results[k].category;
				}
			});
		}
	}



	this.getExercises = function(){
		return searchedExercises;
	}

	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/?language=2&status=2&limit=1000');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?ismain=True&limit=26');

  return this;

});
