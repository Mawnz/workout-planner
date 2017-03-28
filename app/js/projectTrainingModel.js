projectTrainingApp.factory('Workout',function ($resource, $cookies) {


  this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/', {}, {
    get : {
      headers : {
        'Authorization' : 'Token 65e1cb3cf0abf215f3a19c493dc1f1a629ca86dc'
      }
    }    
  });

});
