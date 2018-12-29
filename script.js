

function fetch_food()
{
	var url = "http://engivirus.github.io/wiki/food.json"

	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.send();

	function onLoad(event)
	{
		if(request.status >= 400)
			onFail(event);
		else
		{
			var json = JSON.parse(this.responseText);
			callback(null, json);
			return json;
		}
	}

	function onFail(event)
	{
		callback(new Error("Error occurred."));
	}
}



food_dict = fetch_food();
alert(food_dict);