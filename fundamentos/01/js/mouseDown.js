
function mouseDown(){

	event.preventDefault(); 
 	 
	console.log( event.pageX , event.pageY );
 	console.log(APP.ctx.isPointInPath(event.pageX ,event.pageY ))
	 
}
 