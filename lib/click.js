export function draw(x, y) {
	xY.push({x, y});
}

function getHR() {
	// var hr = $('<hr id="line" style="
		// position: absolute;
		// top: 50px;
		// left: -100px;
		// width: 500px;
		// margin: 0;
		// -webkit-transform: rotatez(53.1deg);
		// border-width: 1px;      border-style: solid;                          
		// border-image: linear-gradient(to right, #ffffff 0%,#ffffff 49%,#000000 50%,#000000 100%) 1;
	// ">');
	
	var hr = $('<div></div>');
	
	return hr;
}

$(document).keyup(function(event) {
	if (event.keyCode == 13)
		console.log(xY);
	return false;
});

var xY = [];