projectTrainingApp.factory('Workout',function ($resource, $cookies) {

	this.query = [];
	this.exercises = [];

	this.returnQuery = function(){
		return query;
	}

  // this.IdSearch = $resource('https://wger.de/api/v2/exercise/145', {}, {
  //   get : {
  //     headers : {
  //       'Authorization' : 'Token 65e1cb3cf0abf215f3a19c493dc1f1a629ca86dc'
  //     }
  //   }
  // });

	this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/');
	this.ExerciseImages = $resource('https://wger.de/api/v2/exerciseimage/?is_main=True&limit=5');



  return this;
});
