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
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_professor'))?? []
const setLocalStorage = (dbProfessor) => localStorage.setItem("db_professor",JSON.stringify(dbProfessor))


const deletarMateria = (index) =>{
    const dbProfessor = readMateria()
    dbProfessor.splice(index,1)
    setLocalStorage(dbProfessor)
}
