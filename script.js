

var foodlist;
var textarea = document.querySelector("textarea");


function fetch_json(url)
{
	fetch(url)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
			foodlist = data;
		})
		.catch(error => console.error(error))
}

function get_text_entries(item)
{
	var entry_dict = {};

	var lines = item.value.split('\n');
	for(var i=0; i<lines.length; i++)
	{
		var pair = lines[i].split(' ');
		var amount = pair[0].replace('g','');
		var name = pair[1];

		entry_dict[name] = parseInt(amount);
	}

	return entry_dict;
}

function set_labels(array)
{
	var labels_div = document.querySelector("#labels");

	// remove all labels
	while (labels_div.firstChild)
	{
	    labels_div.firstChild.remove();
	}

	var html_content = "";
	for(var i=0; i<array.length; i++)
	{
		// console.log(array[i]);

		var new_div = document.createElement("div");
		var new_content = document.createTextNode(array[i]);
		new_div.appendChild(new_content);
		// console.log(new_div);

		labels_div.appendChild(new_div);
	}
}

function create_label_array(dict)
{
	var calories_array = [];
	
	for(var key in dict)
	{
		if(foodlist.hasOwnProperty(key))
		{
			var amount = foodlist[key] / 100 * dict[key];
			calories_array.push(amount);
		}
		else
		{
			calories_array.push(0);
		}
	}

	return calories_array;
}

dummy_obj = JSON.parse('{"one": 1, "two": 2, "three": 3}');


fetch_json("https://engivirus.github.io/kiwi/food.json");

// list = [1, 62, 103];
set_labels([]);


textarea.addEventListener("keyup", function() {
	var dict = get_text_entries(textarea);
	var array = create_label_array(dict);
	set_labels(array);
});



// alert(foodlist);