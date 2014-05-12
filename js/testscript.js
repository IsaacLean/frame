$(function(){
$("#draggable").draggable();

$("#outside").droppable({
	drop: function(event, ui){
		console.log("In outside.");
	}
});

$("#inside").droppable({
	drop: function(event, ui){
		console.log("In inside.");
	}
});

var testdivdata = $("#testdiv").data();
console.log(testdivdata.test1);
console.log(testdivdata.test2);
});