'use strict'

export const insertProfessor = async (professor) => {
    const url = 'https://backend-usinagem.cyclic.app/v1/senai/usinagem/professor'
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(professor)
    }

    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

export const getProfessores = async () => {
    const url = 'https://backend-usinagem.cyclic.app/v1/senai/usinagem/professor'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const insertAluno = async (aluno) => {
    const url = 'https://backend-usinagem.cyclic.app/v1/senai/usinagem/aluno'
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(aluno)
    }

    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

export const getAlunos = async () => {
    const url = 'https://backend-usinagem.cyclic.app/v1/senai/usinagem/aluno'
    const response = await fetch(url)
    const data = await response.json()

    return data
}
