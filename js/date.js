$(document).ready(function(){
		var $login = $('#login');
			
		$login.keydown(function(event){
			if(event.keyCode>= 48 && event.keyCode<=57) {
				
				var $count = ($(this).val()).length;

			}else{
				var $count = 0;
			}
			
			// var $count = ($(this).val()).length;
			
			console.log($count);
			
			

			if($count===9){

					$('#button-next').prop('disabled',false);
			
				}else{
					$('#button-next').prop('disabled',true);
							
				}      
							
		});
		// if(event.keyCode == 8) {}
		// 	event.preventDefault()
		// 	console.log('F11 was pressed');
		// 	}

});

