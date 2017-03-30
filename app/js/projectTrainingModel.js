projectTrainingApp.factory('Workout',function ($resource) {

  this.test = function(){
    console.log('inne i model');
  }

  this.ExerciseSearch = $resource('https://wger.de/api/v2/exercise/', {}, {
    get : {
      headers : {
        'Authorization' : 'Token 65e1cb3cf0abf215f3a19c493dc1f1a629ca86dc'
      }
    }
  });

  this.BeerSearch = $resource('http://api.brewerydb.com/v2/beer/random/', {}, {
    get : {
      headers : {
        'Authorization' : 'a5b51d17942d46e14dd0a74c4a4f5759'
      }
    }
  });

  return this;

});
