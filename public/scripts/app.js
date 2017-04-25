/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.

AlbumIndexController.$inject = ['$http'];
function AlbumsIndexController ( $http ) {
  var vm = this;

  // inside controller

  $http({
    method: 'GET',
    url: 'api/albums'
  }).then(function successCallback(response) {
    console.log('Success!', response);
    vm.albums = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createAlbum = function() {

    $http({
      method: 'POST',
      url: 'api/albums',
      data: {string}
    }).then(function successCallback(response) {
      // stuff
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

  }

}

