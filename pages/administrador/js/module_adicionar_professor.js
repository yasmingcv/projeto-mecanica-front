import { insertProfessor } from "./fetchs.js"
import { getProfessores } from "./fetchs.js"

const professores = await getProfessores()


const openModal = () => document.getElementById('modal').classList.add('active')
const closeModal = () => {
  document.getElementById('modal').classList.remove('active')
  carregarProfessores
}

const inserirProfessor = async () => {
  const nome = document.getElementById('nome_professor').value
  const email = document.getElementById('email_professor').value
  const senha = document.getElementById('senha_professor').value

  const professorJSON = {
    "nome": nome,
    "email": email,
    "senha": senha
  }

  const fetch = await insertProfessor(professorJSON)
  criaCard(nome) // Chama a função criaCard passando o nome do professor

  if(fetch.status == 201){
    closeModal()
    carregarProfessores
  } else {
    alert('Ocorreu um erro.')
  }
}

const criaCard = (professor) => {
  const card = document.createElement('div')
  card.classList.add('card')

  const nome = document.createElement('h1')
  nome.textContent = professor.nome

  card.append(nome)

  return card

}

const carregarProfessores = async () => {
  const container = document.getElementById('cards_professor')

  const profs = professores.professores.map(criaCard)

  container.replaceChildren(...profs)
}


carregarProfessores()


// Eventos
document.getElementById('adicionarProfessor').addEventListener('click', openModal)
document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('salvar').addEventListener('click', inserirProfessor)
