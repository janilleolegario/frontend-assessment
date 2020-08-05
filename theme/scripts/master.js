 var FETest = (function (){
 	'use strict';

 	function init() {
 		main.getData();
 		main.tabs();
 	}

 	var main = {
 		getData: function () {
 			$.getJSON('../../data.json', function(data) {
 				var template = '';
 				var tabLink = 1;
			    $.each(data, function(index, element) {
			        template += '<li class=tab-list>' +
			        		'<a href=#tab-'+tabLink+' class="list">' + element.title + '</a>' +
			        	'</li>';

			        $('#tab-' + tabLink).html(element.content);

			        tabLink++;
			    });
			    $('.tabs-nav').append(template);
			});
 		},

 		tabs: function () {

			$('.tabs-nav').delegate('a','click', function() {
			    
			    $('.tab-active').removeClass('tab-active');
			    $(this).parent().addClass('tab-active');
			    $('.tabs-content div').hide();
			    var content = $(this).attr('href');
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





