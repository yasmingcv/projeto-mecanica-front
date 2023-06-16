'use strict'

import { autenticarAluno } from "./fetchvalidacao.js"
import { autenticarAdministrador } from "./fetchvalidacao.js"
import { autenticarProfessor } from "./fetchvalidacao.js"

const logarUsuario = async (dados) => {
    let verificarCredenciaisAluno = await autenticarAluno(dados)
    let verificarCredenciaisAdministrador = await autenticarAdministrador(dados)
    let verificarCredenciaisProfessor = await autenticarProfessor(dados)

    console.log(verificarCredenciaisAdministrador);

    if(verificarCredenciaisAluno.status == 200) {
        window.location.href = '../pages/aluno/html/hall_aluno.html'
    } else if (verificarCredenciaisAdministrador.status == 200){
        window.location.href = '../pages/administrador/html/hall_administrador.html'
    } else if (verificarCredenciaisProfessor.status == 200) {
        window.location.href = '../pages/professor/html/hall_professor.html'
    } else {
        alert('Usuário não identificado.')
    }

}

// const aluno = {
//     "email": "jainacinho@gmail.com",
//     "senha": "senhaforte"
// }

const enviarEmailSenha = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const aluno = {}
    aluno.email = email
    aluno.senha = senha

    logarUsuario(aluno)

}

const botaoEntrar = document.getElementById('entrar')
botaoEntrar.addEventListener('click', enviarEmailSenha)

