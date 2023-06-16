'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

//Get & Set  LocalStorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_aluno'))?? []
const setLocalStorage = (dbAluno) => localStorage.setItem("db_aluno",JSON.stringify(dbMateria))
    

const deletarAluno = (index) =>{
    const dbAluno = readAluno()
    dbAluno.splice(index,1)
    setLocalStorage(dbAluno)
}

const UpdateAluno = (index, aluno) =>{
    const dbAluno = readAluno()
    dbAluno[index] = aluno
    setLocalStorage(dbAluno)
}

const readAluno = () => getLocalStorage()

//CRUD -CREATE
const createAluno= (aluno) =>{
    const dbAluno = getLocalStorage()
    dbAluno.push(aluno)
    setLocalStorage(aluno)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}
//Interção com o layout

//Para limpar os campos
const clearFields =()=>{
    const filds = document.querySelectorAll('.modal-field')
    filds.forEach(fild => fild.value= "")
}

//BOTÃO SALVAR
const salveMateria = () =>{
    if (isValidFields()) {
        const aluno = {
            materia: document.getElementById('nome_aluno').value,
            descrição: document.getElementById('email_aluno').value,
            professor: document.getElementById('senha_aluno').value,

        }
        const index = document.getElementById('aluno').dataset.index
        if (index == 'new') {
            createAluno(aluno)
            updateTable()
            closeModal()    
        }else{
            UpdateAluno(index,materia)
            updateTable()
            closeModal()
        }
        
    }
}

//Criação das tebelas
const createCard =(aluno, index)=>{
    const newCard = document.createElement('car')
    newCard.innerHTML = `
    
    `
}
//Eventos
document.getElementById('adicionarAluno')
    .addEventListener('click',openModal)


document.getElementById('modalClose')
    .addEventListener('click',closeModal)


