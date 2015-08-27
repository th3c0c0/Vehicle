//slide 4
	$("div.module");

	$("ul#myList li:nth-child(3)");
	$("ul#myList li:eq(3)");
	$("#myList #myListItem");

	$("label[for='q']");

	$('[style*="display: none"]').lenght;

	$("img[alt!='']").lenght;

	$("tbody tr:nth-child(odd)");

//slide 5
	$("img").each( function (){console.log( $(this).attr('alt'));});

	$("input[name='q']").parent("form").addClass("new_class");

	$("#mylist li.current").removeClass('current').next().addClass('current');


//slide 6
	
	$("#specials select").parent("form").find("input[type='submit']");

	$("#slideshow li:first").addClass("current").nextAll("li").addClass("disabled");

//slide 7

	for(var i=0; i<5;i++)
		$("#myList").append("<li>"+(i+1)+"</li>");

	$("#myList :nth-child(odd)").remove();

	$("div.module:last").append("<h2>another h2 more</h2><p>Another paragraph more!!!!</p>");

	$("select").append("<option value='wednesday'>Wednesday</option>");

	$("div#main").append("<div class='module'></div>");
	$("img").clone().appendTo("div#main:last");