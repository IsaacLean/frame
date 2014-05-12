$(function(){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
ctx.strokeRect(10, 10, 50, 50);

$(".drag").draggable({
	revert: true,
	revertDuration: 200,
	stop: function(){
		$(".drag").draggable("option", "revertDuration", 200);
	}
});

$(".layer").droppable({
	accept: ".drag",
	tolerance: "touch",
	hoverClass: "layerhover",
	drop: function(event, ui){
		//$(this).css("background-color", "purple");
		ctx.fillStyle = "blue";
		ctx.fillRect(10, 10, 50, 50);
		$(".drag").draggable("option", "revertDuration", 0);
		console.log("You dropped " + ui.draggable.attr("data-char") + "-" + ui.draggable.attr("data-move") + " into " + $.trim($(this).text()) + ".");
		
		$(this).append("<div class=\"frame\"></div><div class=\"frame\"></div><div class=\"frame\"></div><div class=\"frame\"></div><div class=\"frame\"></div><div class=\"frame\"></div><div class=\"frame\"></div>");
	}
});

$(".moves").sortable();

});