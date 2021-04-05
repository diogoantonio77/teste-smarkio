$(document).ready(function(){
	$('#submit').on('click',function(){
		var jsonData = {comment:$('#addComment').val()};

		if (jsonData.comment == ''){
			M.toast({html: 'adicione um comentário válido!', classes: 'rounded', classes: 'red rounded'});
			return false;
		}else{ 
		$.ajax({

			url: 'http://localhost:3000/coments',
			type: 'POST',
			dataType: "json",
			data: jsonData,
			
		}).done(function(){
			//alert('Comentário cadastrado com sucesso!');
			M.toast({html: 'comentário adicionado!', classes: 'rounded', classes: 'green rounded'});
			$('#addComment').val('');
			loadComments();
		});
	}
});
}


);