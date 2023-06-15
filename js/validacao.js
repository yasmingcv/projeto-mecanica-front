const emailRegex =/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const entrar = document.getElementById('entrar');


function validarLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    // Validação simples do e-mail e senha
    if (email === 'adm@example.com' && senha === '123') {
      
      // Redirecionar para outra página
      window.location.href = './page/administrador/html/hall_administrador.html';
    }
    else if (email === 'professor@example.com' && senha === '124') {
        
      window.location.href = './pages/professor/html/hall_professor.html';
    } 
    else {
      
      // Mostrar alerta
      alert('E-mail ou senha inválidos. Tente novamente.');
    }
  }
entrar.addEventListener('click', validarLogin)
