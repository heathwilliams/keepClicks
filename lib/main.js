import $ from 'jquery'
import {draw} from './click'


$(document).click(function(event) {
	draw(event.clientX, event.clientY);
});



// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();