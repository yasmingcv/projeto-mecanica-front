'use strict'

import { autenticarAluno } from "./fetchvalidacao.js"

const logarAluno = async (dadosAluno) => {
    let verificarCredenciais = await autenticarAluno(dadosAluno)

    if(verificarCredenciais.status == 200) {
        window.location.href = '../pages/aluno/html/hall_aluno.html'
    } else {
        alert('Usuário não autenticado.')
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

    logarAluno(aluno)

}

const botaoEntrar = document.getElementById('entrar')
botaoEntrar.addEventListener('click', enviarEmailSenha)

