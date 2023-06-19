import { insertProfessor } from "./fetchs.js"
import { getProfessores } from "./fetchs.js"

const openModal = () => document.getElementById('modal').classList.add('active')
const closeModal = () => document.getElementById('modal').classList.remove('active')

const inserirProfessor = async () => {
  const nome = document.getElementById('nome_professor').value
  const email = document.getElementById('email_professor').value
  const senha = document.getElementById('senha_professor').value

  const professorJSON = {
    "nome": nome,
    "email": email,
    "senha": senha
  }

  await insertProfessor(professorJSON)
  criaCard(nome) // Chama a função criaCard passando o nome do professor
}

const criaCard = (nome) => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.textContent = nome

  const cardContainer = document.getElementById('cardContainer')
  cardContainer.appendChild(card)
}

// Eventos
document.getElementById('adicionarProfessor').addEventListener('click', openModal)
document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('salvar').addEventListener('click', inserirProfessor)
