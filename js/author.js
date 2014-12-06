$(document).ready(function(){
	
	function mm_toggle(){

		if (menu_state == 'hidden')
		{
			menu_state = 'visible';
			$('#mainmenu .inset').show();
		}
		else
		{
			menu_state = 'hidden';
			$('#mainmenu .inset').hide();
		}

		console.log('toggle me');
	}
	$('#mainmenu .glyphicon-align-justify').click(mm_toggle);


	/* window scroll -----------------------
	--------------------------------------*/

	$(window).scroll(function(){
		var howFar = $(window).scrollTop();
		// console.log(howFar);

		if (howFar >= 300)
		{
			$('#wrapper').addClass('pinned');
		}
		else
		{
			$('#wrapper').removeClass('pinned');
		}

		nav_selected();

	}); //window scroll ends here


	function nav_selected() {
		// figure out how far the section is from the top
		var s1 = $('#section1').offset().top - 71;
		var s2 = $('#section2').offset().top - 71;
		var s3 = $('#section3').offset().top - 71;
		var s4 = $('#section4').offset().top - 71;

		var howFar = $(window).scrollTop();

		// blanket remove
		$('#mainmenu a').removeClass('selected');

		// evaluate
		if (howFar >= s1 && howFar < s2)
		{
			$('#mainmenu a:eq(0)').addClass('selected');
		}
		else if (howFar >= s2 && howFar < s3)
		{
			$('#mainmenu a:eq(1)').addClass('selected');
		}
		else if (howFar >= s3 && howFar < s4)
		{
			$('#mainmenu a:eq(2)').addClass('selected');
		}
		else if (howFar >= s4)
		{
			$('#mainmenu a:eq(3)').addClass('selected');
		}
	}

	
	$('#mainmenu a').click(function(event){
		// kill the link. 
		event.preventDefault();

		
		var whichSection = $(this).attr('href');
		var destiny = $(whichSection).offset().top - 70;

		$(window).scrollTo(destiny, 1000);

	});

}); 


/* ----Light boxes -------
-------------------------*/

var next;
var prev;

function light_on() {

	next = $(this).parent().next().find('img');
	prev = $(this).parent().prev().find('img');



	
	var newSrc = $(this).attr('src');
	$ ('#dark .light img')
	.attr('src',newSrc)
	.stop(true)
	.css({'opacity':'0'});

	
	$('#dark .light img').load(function(){
		var newHeight = $('#dark .light img').height();
		console.log(newHeight);

		
		$('#dark .light')
			.stop(true)
			.animate({'height':newHeight},900, function() {
				$('#dark .light img').animate({'opacity':'1'},500);
			});

	});
	
	$('#dark').show();
}

$('#gallery img').click(light_on);

function light_off() {
	$('#dark').hide();
}

$('#dark .light .close').click(light_off);

function arrow_next() {
	next.trigger('click');
}
function arrow_prev() {
	prev.trigger('click');
}

$('.light .icon-arrow-left').click(arrow_prev);
$('.light .icon-arrow-right').click(arrow_next);



/* ------ map hovers ------
------------------------- */
function overlay_over() {
		$(this).find('.text').stop(true).animate({'bottom':'0px'});
		$(this).find('img').stop(true).animate({'width':'100%'});
}
		function overlay_out() {
			$(this).find('.text').stop(true).animate({'bottom':'-80px'});
			$(this).find('img').stop(true).animate({'width':'110%'});
}

			$('#overlay .piece').mouseover(overlay_over);
			$('#overlay .piece').mouseout(overlay_out);


/* font color change */

$('.color').click(function(){
				$(this).css({'color':'#9f965c'});

});  



/* sliders */
$('#sliding img:gt(0)').css({'left':'600px'});

			function slide_horizontal() {
				$('#sliding img:eq(1)').animate({'left':'0px'},1000);

				$('#sliding img:eq(0)').animate({'left':'-500px'},1000, endOfAnimate);

				function endOfAnimate() {
					$('#sliding img:eq(0)')
						.appendTo('#sliding')
						.css({'left':'500px'});

					setTimeout(slide_horizontal,4000); /*kepp the party going */
				}

			}
			setTimeout(slide_horizontal,4000); /*start the party */

/* slide 2*/
$('#sliding2 img:gt(0)').css({'left':'600px'});

		function slide_side() {
				$('#sliding2 img:eq(1)').animate({'left':'0px'},1000);

				$('#sliding2 img:eq(0)').animate({'left':'-500px'},1000, endAnimate);

				function endAnimate() {
					$('#sliding2 img:eq(0)')
						.appendTo('#sliding2')
						.css({'left':'500px'});

					setTimeout(slide_side,4000); /*kepp the party going */
				}

			}
			setTimeout(slide_side,4000); /*start the party */
