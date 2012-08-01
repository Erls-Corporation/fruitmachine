$(document).ready( function() {
	/*var canvas = document.getElementById('canvas-bandit');
	var context = canvas.getContext('2d');
	context.fillStyle = 'blue';
	context.fillRect(30, 30, 50, 50);*/
	
	//jQuery.easing.def = "easeOutBounce";
	
	function hasDuplicate(arr) {
	    var i = arr.length, j, val;
	    while (i--) {
	    	val = arr[i];
	        j = i;
	        while (j--) {
	        	if (arr[j] === val) {
	            	return true;
	        	}
	        }
	    }
	    return false;
	}
	
	function arrayRand(arr) {
		return arr[Math.floor(Math.random()*arr.length)];
	}
	
	function game() {
		var reelA = new Array(1,4,5,7,8,9,6,5,4,8,9,5);
		var reelB = new Array(1,3,5,7,3,3,8,6,5,9,0,5);
		var reelC = new Array(2,3,4,6,7,3,5,6,8,9,0,8);
		var results = new Array(arrayRand(reelA),arrayRand(reelB),arrayRand(reelC));
		return results;
	}
	
	function spin(spinner) {
		var time = 6500;
		time += Math.round(Math.random()*1000);
		spinner.stop(true,true);
		
		var marginTop = parseInt(spinner.css("margin-top"), 10)
				
		marginTop -= (7 * 300)
			
		spinner.animate({
		    "margin-top": marginTop+"px", 
		  }, "slow", function() {
		    // Animation complete.
		  });
	}
	
	//Arm pull
	$('#arm').click( function () {
		$('.slot-wrapper').css('margin-top', '14px');
		
		spin($('#spinner1 .slot-wrapper'));
		spin($('#spinner2 .slot-wrapper'));
		spin($('#spinner3 .slot-wrapper'));
		
		var results = game();
		$('#bottom-slot1').html(results[0]);
		$('#bottom-slot2').html(results[1]);
		$('#bottom-slot3').html(results[2]);
		
		var duplicates = hasDuplicate(results);
		if(duplicates){
			$('#winner').html('Winner!!');
		}else{
			$('#winner').html('Try again!');
		}
	});
});