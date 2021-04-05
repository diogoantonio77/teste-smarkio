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

function readComent(coment){
	const fs = require('fs');
	const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
	const { IamAuthenticator } = require('ibm-watson/auth');
	
	const textToSpeech = new TextToSpeechV1({
	  authenticator: new IamAuthenticator({
		apikey: '{apikey}',
	  }),
	  serviceUrl: '{url}',
	});
	
	const synthesizeParams = {
	  text: 'Hello world',
	  accept: 'audio/wav',
	  voice: 'pt-BR_IsabelaVoice',
	};
	
	textToSpeech.synthesize(synthesizeParams)
	  .then(response => {
		// only necessary for wav formats,
		// otherwise `response.result` can be directly piped to a file
		return textToSpeech.repairWavHeaderStream(response.result);
	  })
	  .then(buffer => {
		fs.writeFileSync('hello_world.wav', buffer);
	  })
	  .catch(err => {
		console.log('error:', err);
	  });
	}
	
	
	//chave api: he2VebnRNtKO1dxdXfxij_S3sspmzLzzgGlCRc1Fx8bv  
	//instancia: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/8521c9ee-7251-418c-9686-f7998856baac