

// change urls dynamically 
function changeUrls() { 

	var validUrls = ["https://www.codepen.com","https://www.hackerrank.com","https://www.github.com","https://www.kotlin.com","https://www.sakshi.com","https://www.eenaadu.com","https://www.timesofindia.com"];
	var validText = ["Codepen","Hackerrank","github","kotlin","sakshi","eenaadu","timesofindia"];
	
	//to show previous urls
	var divID = document.getElementById('previousUrls');
	for(var index=0 ;index<7;index++) {
		document.getElementsByTagName("a")[index].text = validText[index]; // to change link text
		document.getElementsByTagName("a")[index].href = validUrls[index]; // to change the link url
		//for showing previous links
		divID.innerHTML += document.getElementsByTagName("a")[index].href+"<br>";
	}
	alert("Urls successfully changed.. now link on any link.");
}


function reloadPage(){
	location.reload();
}

//note:  use below loop to change all existed links in page.
 //for(var index in document.getElementsByTagName("a"))