$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});
$(document).ready(function() {
				$('#fullpage').fullpage({
					anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
					menu: '#menu',
					scrollOverflow: true,
					scrollOverflowOptions: {
					click: true},
					slidesNavigation: true,
					afterLoad: function(anchorLink, index){

						//section 2
						if(index == 2){
							//moving the image
							$('#section1').find('img').delay(500).animate({
								left: '0%'
							}, 1500, 'easeOutExpo');

							$('#section1').find('p').first().fadeIn(1800, function(){
								$('#section1').find('p').last().fadeIn(1800);
							});;

						}

						//section 3
						if(anchorLink == '3rdPage'){
							//moving the image
							$('#section2').find('.intro').delay(500).animate({
								left: '0%'
							}, 1500, 'easeOutExpo');
						}
					}
				
				});

			});