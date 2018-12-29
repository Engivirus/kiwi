

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

// returns an array of tuples [name,grams]
function get_text_entries(item)
{
	var entries = [];

	var lines = item.value.split('\n');
	for(var i=0; i<lines.length; i++)
	{
		var pair = lines[i].split(' ');
		var amount = parse_amount(pair[0]);
		var name = pair[1];
		
		var new_pair = [name, amount];

		entries.push(new_pair);
	}

	return entries;
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

function create_label_array(entries)
{
	var calories_array = [];
	
	for(var i=0; i<entries.length; i++)
	{
		var foodname = entries[i][0];
		if(foodlist.hasOwnProperty(foodname))
		{
			var amount = foodlist[foodname] / 100 * entries[1];
			calories_array.push(amount);
		}
		else
		{
			calories_array.push(0);
		}
	}

	return calories_array;
}

function parse_amount(somestring)
{
	if(somestring.includes("kg") {
	   return 1000 * parseInt(somestring.replace("kg",""));}
	else {
		return parseInt(somestring.replace("g","")); }
}

dummy_obj = JSON.parse('{"one": 1, "two": 2, "three": 3}');


fetch_json("https://engivirus.github.io/kiwi/food.json");

// list = [1, 62, 103];
set_labels([]);


textarea.addEventListener("keyup", function() {
	var entries = get_text_entries(textarea);
	var array = create_label_array(entries);
	set_labels(array);
});



// alert(foodlist);
