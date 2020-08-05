 var FETest = (function (){
 	'use strict';

 	function init() {
 		main.header();
 	}


 	var main = {
 		header: function () {
 			$('.menu-button').on('click', function() {
 				if ($('.menu').hasClass('show')) {
 					$('.menu').removeClass('show');
 				} else {
 					$('.menu').addClass('show');
 				}
 			});
 		},
 	};

	return {
    	init: init
    };
 }());


jQuery(document).ready(function($){ FETest.init(); });