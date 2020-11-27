var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-6.5vw";
  }
  prevScrollpos = currentScrollPos;
}

/***************PORTFOLIO*************/

$('#devi').click( function(){

	$('.devi').css('display','block');
	$('.es').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#es').click( function(){

	$('.es').css('display','block');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#imdi').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','block');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#inox').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','block');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#neon').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','block');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#pape').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','block');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#rec').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','block');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#stan').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','block');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#term').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','block');
	$('.outros').css('display','none');
	$('.vicri').css('display','none');
});

$('#outros').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.vicri').css('display','none');
	$('.outros').css('display','block');
});

$('#vicri').click( function(){

	$('.es').css('display','none');
	$('.devi').css('display','none');
	$('.imdi').css('display','none');
	$('.inox').css('display','none');
	$('.neon').css('display','none');
	$('.pape').css('display','none');
	$('.rec').css('display','none');
	$('.stan').css('display','none');
	$('.term').css('display','none');
	$('.outros').css('display','none');
	$('.vicri').css('display','block');
});

$('#todos').click( function(){

	$('.todos').css('display','block');
});