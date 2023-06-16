'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

//Get & Set  LocalStorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_professor'))?? []
const setLocalStorage = (dbProfessor) => localStorage.setItem("db_professor",JSON.stringify(dbMateria))
    

const deletarProfessor = (index) =>{
    const dbProfessor = readProfessor()
    dbProfessor.splice(index,1)
    setLocalStorage(dbProfessor)
}

const UpdateProfessor = (index, professor) =>{
    const dbProfessor = readProfessor()
    dbProfessor[index] = professor
    setLocalStorage(dbProfessor)
}

const readProfessor = () => getLocalStorage()

//CRUD -CREATE
const createProfessor= (professor) =>{
    const dbProfessor = getLocalStorage()
    dbMateria.push(professor)
    setLocalStorage(professor)
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
        const professor = {
            materia: document.getElementById('nome_professor').value,
            descrição: document.getElementById('email_professor').value,
            professor: document.getElementById('senha_professor').value,

        }
        const index = document.getElementById('professor').dataset.index
        if (index == 'new') {
            createProfessor(professor)
            updateTable()
            closeModal()    
        }else{
            UpdateProfessor(index,materia)
            updateTable()
            closeModal()
        }
        
    }
}

//Criação das tebelas
const createCard =(professor, index)=>{
    const newCard = document.createElement('car')
    newCard.innerHTML = `
    
    `
}
//Eventos
document.getElementById('adicionarProfessor')
    .addEventListener('click',openModal)


document.getElementById('modalClose')
    .addEventListener('click',closeModal)

