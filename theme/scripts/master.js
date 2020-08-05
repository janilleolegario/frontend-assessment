 var FETest = (function (){
 	'use strict';

 	function init() {
 		main.getData();
 		main.tabs();
 	}


 	var main = {
 		getData: function () {
 			$.getJSON('../../data.json', { get_param: 'value' }, function(data) {
 				var template = '';
 				var tabLink = 1;
			    $.each(data, function(index, element) {
			        console.log(data);
			        template += '<li class=tab-list>' +
			        		'<a href=#tab-'+tabLink+' rel="nofollow">' + element.title + '</a>' +
			        	'</li>';

			        $('#tab-' + tabLink).html(element.content);

			        tabLink++;
			    });
			    $('.tabs-nav').append(template);
			});
 		},
 		tabs: function () {
 		// 	$('.accordion').each(function() {
			//     $(this).find('.title').on('click', function(e) {
			//         $('.accordion .title').find('span').attr('data-icon', '3');
			//         e.preventDefault();
			      
			//         var $this = $(this);
			      
			//         if ($this.next().hasClass('show')) {
			//                 $this.next().removeClass('show');
			//                 $this.next().slideUp(350);
			//                 // $('.accordion .title').find('span').attr('data-icon', '2');
			//         } 
			//         else {
			//             $this.parent().parent().find('.movies').removeClass('show');
			//             $this.parent().parent().find('.movies').slideUp(350);
			//             $this.next().toggleClass('show');
			//             $this.next().slideToggle(350);
			//             $(this).find('span').attr('data-icon', '2');
			//         }
			//     });
			// });

			// Change tab class and display content

			$('.tabs-nav').delegate('a','click', function() {
			    console.log("click!");
			    
			    $('.tab-active').removeClass('tab-active');
			    $(this).parent().addClass('tab-active');
			    $('.tabs-content div').hide();
			    var content = $(this).attr('href');
			    console.log(content);
			    $(content).fadeIn();
			});

			// $('.tab-list:first').trigger('click');
		}
 	};

	return {
    	init: init
    };
 }());


jQuery(document).ready(function($){ FETest.init(); });





