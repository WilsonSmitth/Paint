$(document).ready(function(){
	buildCells(16);

	$('.newCanvas').click(function(){
		console.log('prompting for new template');
		sidePrompt();
	});

	$('.newCanvas').mouseenter(function(){
		console.log('reading');
		$('.newCanvas').addClass('shadowed');
	});
	$('.newCanvas').mouseleave(function(){
		$('.newCanvas').removeClass('shadowed');
		console.log('all green');
	});
});

function sidePrompt() {
	var newFeild = prompt("Enter the number of squares per side");
	buildCells(newFeild);
};

function buildCells(side) {
	$('.field').empty();
	var oneCell = '<div class = "cell" style = "float:left"></div>';
	var otherCell = '<div class = "cell" style = "float:right"></div>';
	var cellSide = (800%side ? 800/side-1 : 800/side);

	for(var counter = 0; counter < side*side; counter++) {
		if(counter % side !== 0){
			$('.field').append(oneCell);
		}
		else {
			$('.field').append(otherCell);
		}
	}

	$('.cell').css({'width': cellSide, 'height': cellSide, 'opacity': '0'});
	$('.cell').mouseenter(function() { 

		$(this).css('opacity', '1');
	});
};

