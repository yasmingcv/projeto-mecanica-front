'use strict'

const form = document.getElementById('form');
const  campos = document.querySelectorAll('.form-control');
const emailRegex =/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const entrar = document.getElementById('entrar');

function nomeValidacao(){
    if (campos[0].value.length <= 8 ){

        console.log("ERRO");
        form.classList.add('sombra-vermelha');
    }
    else{
        console.log("Certo");
        
    }
}


function validarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Validação simples do e-mail e senha
    if (email === 'adm@example.com' && senha === '123') {
      
      // Redirecionar para outra página
      window.location.href = '../pages/administrador/html/hall_administrador.html';
    }
    else if (email === 'professor@example.com' && senha === '124') {
        
      window.location.href = './pages/professor/html/hall_professor.html';
    } 
    else {
      
      // Mostrar alerta
      alert('E-mail ou senha inválidos. Tente novamente.');
    }
  }
entrar.addEventListener('click', validarLogin,nomeValidacao)

(function(window) { 
  'use strict'; 
 
var noback = { 
	 
	//globals 
	version: '0.0.1', 
	history_api : typeof history.pushState !== 'undefined', 
	 
	init:function(){ 
		window.location.hash = '#no-back'; 
		noback.configure(); 
	}, 
	 
	hasChanged:function(){ 
		if (window.location.hash == '#no-back' ){ 
			window.location.hash = '#BLOQUEIO';
			//mostra mensagem que não pode usar o btn volta do browser
			if($( "#msgAviso" ).css('display') =='none'){
				$( "#msgAviso" ).slideToggle("slow");
			}
		} 
	}, 
	 
	checkCompat: function(){ 
		if(window.addEventListener) { 
			window.addEventListener("hashchange", noback.hasChanged, false); 
		}else if (window.attachEvent) { 
			window.attachEvent("onhashchange", noback.hasChanged); 
		}else{ 
			window.onhashchange = noback.hasChanged; 
		} 
	}, 
	 
	configure: function(){ 
		if ( window.location.hash == '#no-back' ) { 
			if ( this.history_api ){ 
				history.pushState(null, '', '#BLOQUEIO'); 
			}else{  
				window.location.hash = '#BLOQUEIO';
				//mostra mensagem que não pode usar o btn volta do browser
				if($( "#msgAviso" ).css('display') =='none'){
					$( "#msgAviso" ).slideToggle("slow");
				}
			} 
		} 
		noback.checkCompat(); 
		noback.hasChanged(); 
	} 
	 
	}; 
	 
	// AMD support 
	if (typeof define === 'function' && define.amd) { 
		define( function() { return noback; } ); 
	}  
	// For CommonJS and CommonJS-like 
	else if (typeof module === 'object' && module.exports) { 
		module.exports = noback; 
	}  
	else { 
		window.noback = noback; 
	} 
	noback.init();
}(window)); 
