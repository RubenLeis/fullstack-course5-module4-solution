(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

/**
* Service to retrieve menu items
*/
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  /**
  * Get list item that match to searchTerm
  */
  //FIXME: URL in constants
  service.getAllCategories = function () {
	console.log("MenuDataService", "getAllCategories");
	var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
	
	return response;
  };

	
  service.getItemsForCategory = function(categoryShortName) {
	var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
	  params: {
        category: categoryShortName
      }
	  
    });
	return response;  
  };
}

})();



