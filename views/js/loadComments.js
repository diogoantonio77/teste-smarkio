$(document).ready(function(){
	loadComments();
});


function loadComments(){
	let divComments =  document.getElementById("divComments");
	$.ajax({
		url: 'http://localhost:3000/coments',
		type: 'GET',

	}).done(function(results){
	
		divComments.innerHTML = '';
		results['data'].forEach(function (comment){
		
			divComments.innerHTML = divComments.innerHTML + 
			"<div class='grid-container'><div class='item1'><p><h6>"+comment.comment+"</h6></p></div>" +
			"<div class='item2' style='text-align: right;'><button type='button' id='post' class='btn'>Ler</button></div></div>"

		});
	});
}