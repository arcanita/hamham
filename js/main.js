	
$(document).ready(function(){
	
	//slider
	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

	//posts
	var posts = [
	{
		title: "Prueba de titulo 1",
		date: "Publicado el día "+moment().format("D")+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl elit. Suspendisse potenti. Pellentesque vitae odio viverra, rhoncus ligula vitae, aliquam dui. Nam dolor sem, volutpat sed purus vel, scelerisque hendrerit urna. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a tellus augue. Curabitur a ultricies sapien. Vivamus nec velit dolor. Cras ac accumsan lectus, placerat cursus dolor. Nullam vel volutpat lorem. Ut scelerisque quam quis pellentesque laoreet. Ut leo est, lobortis a orci sit amet, placerat ullamcorper urna. Quisque mi purus, mollis sit amet egestas eu, congue vitae lectus. Nulla mollis purus arcu, et mattis ante placerat eget."
	},
	{
		title: "Prueba de titulo 2",
		date: "Publicado el día "+moment().format("D")+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl elit. Suspendisse potenti. Pellentesque vitae odio viverra, rhoncus ligula vitae, aliquam dui. Nam dolor sem, volutpat sed purus vel, scelerisque hendrerit urna. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a tellus augue. Curabitur a ultricies sapien. Vivamus nec velit dolor. Cras ac accumsan lectus, placerat cursus dolor. Nullam vel volutpat lorem. Ut scelerisque quam quis pellentesque laoreet. Ut leo est, lobortis a orci sit amet, placerat ullamcorper urna. Quisque mi purus, mollis sit amet egestas eu, congue vitae lectus. Nulla mollis purus arcu, et mattis ante placerat eget."
	},
	{
		title: "Prueba de titulo 3",
		date: "Publicado el día "+moment().format("D")+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl elit. Suspendisse potenti. Pellentesque vitae odio viverra, rhoncus ligula vitae, aliquam dui. Nam dolor sem, volutpat sed purus vel, scelerisque hendrerit urna. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a tellus augue. Curabitur a ultricies sapien. Vivamus nec velit dolor. Cras ac accumsan lectus, placerat cursus dolor. Nullam vel volutpat lorem. Ut scelerisque quam quis pellentesque laoreet. Ut leo est, lobortis a orci sit amet, placerat ullamcorper urna. Quisque mi purus, mollis sit amet egestas eu, congue vitae lectus. Nulla mollis purus arcu, et mattis ante placerat eget."
	},
	{
		title: "Prueba de titulo 4",
		date: "Publicado el día "+moment().format("D")+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl elit. Suspendisse potenti. Pellentesque vitae odio viverra, rhoncus ligula vitae, aliquam dui. Nam dolor sem, volutpat sed purus vel, scelerisque hendrerit urna. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a tellus augue. Curabitur a ultricies sapien. Vivamus nec velit dolor. Cras ac accumsan lectus, placerat cursus dolor. Nullam vel volutpat lorem. Ut scelerisque quam quis pellentesque laoreet. Ut leo est, lobortis a orci sit amet, placerat ullamcorper urna. Quisque mi purus, mollis sit amet egestas eu, congue vitae lectus. Nulla mollis purus arcu, et mattis ante placerat eget."
	},
	{
		title: "Prueba de titulo 51",
		date: "Publicado el día "+moment().format("D")+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl elit. Suspendisse potenti. Pellentesque vitae odio viverra, rhoncus ligula vitae, aliquam dui. Nam dolor sem, volutpat sed purus vel, scelerisque hendrerit urna. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean a tellus augue. Curabitur a ultricies sapien. Vivamus nec velit dolor. Cras ac accumsan lectus, placerat cursus dolor. Nullam vel volutpat lorem. Ut scelerisque quam quis pellentesque laoreet. Ut leo est, lobortis a orci sit amet, placerat ullamcorper urna. Quisque mi purus, mollis sit amet egestas eu, congue vitae lectus. Nulla mollis purus arcu, et mattis ante placerat eget."
	},
	]

	posts.forEach((item, index)=>{
		var post = `
		<article class="post">
			<h2>${item.title}</h2>
			<span class="date">${item.date}</span>
			<p>${item.content}</p>
			</article>
			<a href="#" class="button-more">Leer más</a>
		`;

		$("#posts").append(post);
	});

	var theme = $("#theme");
	$("#to-soft").click(function(){
		theme.attr("href", "css/soft.css");
	});

	$("#to-dark").click(function(){
		theme.attr("href", "css/dark.css");
	});

	
});