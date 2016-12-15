(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

/**
* Service to retrieve menu items
*/
MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  /**
  * Get list item that match to searchTerm
  * Promises and http == >http://stackoverflow.com/questions/12505760/processing-http-response-in-service
  */
  //FIXME: URL in constants
  service.getAllCategories = function () {
	// $http returns a promise, which has a then function, which also returns a promise
	var promise = $http({
		 // The then function here is an opportunity to modify the response
		method: "GET",
		url: ('https://davids-restaurant.herokuapp.com/categories.json')
	})
	.then(function (response) {
		// Update the response ?
		//console.log("getAllCategories response:");
		//console.log(response);
		 // The return value gets picked up by the then in the controller.
		return response.data;
	});
	// Return the promise to the controller
	return promise;
  };

	
  service.getItemsForCategory = function(categoryShortName) {
	// $http returns a promise, which has a then function, which also returns a promise
	var promise = $http({
		 // The then function here is an opportunity to modify the response
		url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
		method: "GET",
		params: {
			category: categoryShortName
		}
	})
	.then(function (response) {
		// Update the response ?
		console.log("getItemsForCategory response:");
		console.log(response);
		 // The return value gets picked up by the then in the controller.
		return response.data;
	});
	// Return the promise to the controller
	return promise;
  };
}

})();



