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
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_adicionar_turma'))?? []
const setLocalStorage = (dbMateria) => localStorage.setItem("db_adicionar_turma",JSON.stringify(dbMateria))


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
            Nome_da_Turma: document.getElementById('Nome_da_Turma').value,
            Termo: document.getElementById('Termo').value,
            Ano: document.getElementById('Ano').value,
            Horário: document.getElementById('Horário').value,
        }
        const index = document.getElementById('Nome_da_Turma').dataset.index
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

const createRow =(materia, index)=>{
    const newRow  = document.createElement('tr')
    newRow.innerHTML= `
    <td>${materia.Nome_da_Turma} </td>
    <td>${materia.Termo} </td>
    <td>${materia.Ano} </td>
    <td>${materia.Horário}</td>
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

    document.getElementById('Nome_da_Turma').value = materia.materia
    document.getElementById('Termo').value = materia.Termo
    document.getElementById('Ano').value = materia.Ano
    document.getElementById('Horário').value = materia.Horário
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
        
        const [action,index]= event.target.id.split('-')

        if (action == 'edit') {
            editMateria(index)
        }else{
            const materia = readMateria()[index]
            const response = confirm(`Desaja realmente excluir a materia ${materia.Nome_da_Turma}`)
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