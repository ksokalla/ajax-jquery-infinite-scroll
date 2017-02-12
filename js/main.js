'use strict';
$(document).ready(function () {
	
	$(window).scroll(function () {
		
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			
				$.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
					
										
					$.each(data, function (key, val) {
						$( "#sekcja" ).append("<p>User ID: " + val.id + "</p>");
						$( "#sekcja" ).append("<p>User Name: " + val.name + "</p>");
						$( "#sekcja" ).append("<p>User URL: " + val.website + "</p>" + "--------");
					});
				});
			};
	});
});