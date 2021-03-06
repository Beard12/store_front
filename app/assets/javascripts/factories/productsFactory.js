app.factory('productsFactory', ['$http', function($http){

	function productsFactory(){

		this.getProducts  =  function(callback){
			$http.get('/products').success(function(results){
				callback(results);
			})
		}
		this.getProduct = function(id, callback){
			$http.get(`/products/${id}`).success(function(results){
				callback(results);
			})
		}
		this.addToCart = function(id, queue, callback){
			$http.post(`/users/${id}/cart`, queue).success(function(results){
				callback(results);
			})
		}
	}
	return new productsFactory();
}])
	