// Your JavaScript code here...

function parse () {
	// Step 1: create instance of object
	request = new XMLHttpRequest();

	//Step 3: Set up way to manage response-- to a function
	request.onreadystatechange=parseData;

	//Step 2:create or "open" HTTP request
	request.open("GET", "data.json", true);

	//Step 4: execute the request 
	request.send();
}

function parseData () {
	if (reqeust.readyState == 4 && request.status == 200) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length;i++) {
			messagesDiv.innerHTML += "<p>" + converted[i]["content"];
		}
	}
	else if (request.readyState = 4 && request.status == 304) {
		alert("No data changed, move along");

	}
	else if (request.readyState == 4 && request.status == 404) {
		alert("Hacked by the Chinese!");
	}
}