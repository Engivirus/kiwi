

var food_dict = null;

function fetch_json(url)
{
	fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data) // Prints result from `response.json()` in getRequest
	})
	.catch(error => console.error(error))
}



dummy_obj = JSON.parse('{"one": 1, "two": 2, "three": 3}');


var url = "https://engivirus.github.io/kiwi/food.json"
fetch_json(url);
// food_dict = fetch_json(url);


// alert(food_dict);
alert(dummy_obj);