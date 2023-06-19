'use strict'

import { insertAluno } from "./fetchs.js"
import { getAlunos } from "./fetchs.js"

const alunos = await getAlunos()


const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

const inserirAluno = async () => {
    const nome = document.getElementById('nome_aluno').value
    const email = document.getElementById('email_aluno').value
    const senha = document.getElementById('senha_aluno').value

    const alunoJSON = {
        "nome": nome,
        "email": email,
        "senha": senha
    }

    const fetch = await insertAluno(alunoJSON)

    if (fetch.status == 201) {
        closeModal()
    } else {
        alert('Ocorreu um erro.')
    }
}

const criaCard = (aluno) => {
    const img = document.createElement('img')
    img.src = '../../../img/adicionar_professor.jpg'
    img.classList.add('img_aluno')

    const texts = document.createElement('div')
    texts.classList.add('text_aluno')

    const nome = document.createElement('span')
    nome.classList.add('name')
    nome.textContent = aluno.nome

    const email = document.createElement('span')
    email.classList.add('turma')
    email.textContent = aluno.matricula

    const card = document.createElement('div')
    card.classList.add('card')

    texts.append(nome, email)
    card.append(img, texts)

    return card

}

const carregarAlunos = async () => {
    const container = document.querySelector('.cards_aluno')

    const cards_alunos = alunos.alunos.map(criaCard)

    container.replaceChildren(...cards_alunos)
}

carregarAlunos()

//Eventos
document.getElementById('adicionarAluno')
    .addEventListener('click', openModal)


document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', inserirAluno)


