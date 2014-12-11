<<<<<<< HEAD
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
		color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(getRandomColor())
$(document).ready(function() {
	var myColor = getRandomColor();
	console.log(myColor)
=======

$(document).ready(function() {
>>>>>>> 903b983c595653f41dad2230d160301e2411a764
	var grid = prompt("Select a grid size");
	var gridSize = parseInt(grid);
	for (i=0; i < gridSize; i++) {
	$('table').append('<tr></tr>');
<<<<<<< HEAD
	}
	for (y=0; y < gridSize; y++) {
	$('tr').append('<td><div></div></td>');
	}
	$('td').hover(function() {
	$(this).addClass('dot');
=======
	}
	for (y=0; y < gridSize; y++) {
	$('tr').append('<td><div></div></td>');
	}
	$('td').hover(function() {
	$(this).addClass('dot');	
>>>>>>> 903b983c595653f41dad2230d160301e2411a764
	});
	$('button').click(function() {
	$('td').removeClass('dot');
	});
	});


