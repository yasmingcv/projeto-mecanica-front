'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active')

  
}


//Materia Temporario
//const tempMateria = {
  //  materia : "mecanica",
    //descrição: "Descrição",
    //professor: [],

//}

//Get & Set  LocalStorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_materia'))?? []
const setLocalStorage = (dbMateria) => localStorage.setItem("db_materia",JSON.stringify(dbMateria))


const deletarMateria = (index) =>{
    const dbMateria = readMateria()
    dbMateria.splice(index,1)
    setLocalStorage(dbMateria)
}
//CRUD - Create Read Update Delete
const UpdateMateria = (index, materia) =>{
    const dbMateria = readMateria()
    dbMateria[index] = materia
    setLocalStorage(dbMateria)
}

const readMateria = () => getLocalStorage()

//CRUD -CREATE
const createMateria= (materia) =>{
    const dbMateria = getLocalStorage()
    dbMateria.push(materia)
    setLocalStorage(dbMateria)
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
        const materia = {
            materia: document.getElementById('materia').value,
            descrição: document.getElementById('descricao').value,
            professor: document.getElementById('professor').value,

        }
        const index = document.getElementById('materia').dataset.index
        if (index == 'new') {
            createMateria(materia)
            updateTable()
            closeModal()    
        }else{
            UpdateMateria(index,materia)
            updateTable()
            closeModal()
        }
        
    }
}

//Criação das linhas das tabelas 
const createRow =(materia, index)=>{
    const newRow  = document.createElement('tr')
    newRow.innerHTML= `
    <tr>${materia.materia} </td>
    <td>${materia.descricao}</td>
    <td>${materia.professor}</td>
    <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red"   id="delete-${index}">Excluir</button>
    </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable =()=>{
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}


const updateTable = () =>{
    const dbMateria = readMateria()
    clearTable()
    dbMateria.forEach(createRow)
}


const fillFields = (materia)=>{

    document.getElementById('materia').value = materia.materia
    document.getElementById('descricao').value = materia.descricao
    document.getElementById('professor').value = materia.professor
    document.getElementById('materia').dataset.index = materia.index
    
}




const editMateria = (index) =>{
    const materia = readMateria()[index]
    materia.index = index
    fillFields(materia)
    openModal()
}

const editDelete = (event)=>{
    
    if (event.target.type == 'button') {
        console.log(event.target.id.split('-'));

        const [action,index]= event.target.id.split('-')

        if (action == 'edit') {
            editMateria(index)
        }else{
            const materia = readMateria()[index]
            const response = confirm(`Desaja realmente excluir a materia ${materia.materia}`)
            if (response) {
                deletarMateria(index)
                updateTable()
            }
            
            deletarMateria(index)
            updateTable()
        }
    }
    
   
}
updateTable()
    
//Eventos     
document.getElementById('adicionarMateria')
    .addEventListener('click',openModal)
    
document.getElementById('modalClose')
    .addEventListener('click',closeModal)

document.getElementById('salvar')
    .addEventListener('click',salveMateria)

    document.querySelector('#tableClient>tbody')
    .addEventListener('click' ,editDelete)