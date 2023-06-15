'use strict'

export const autenticarAluno = async (aluno) => {
    const url = 'https://backend-usinagem.cyclic.app/v1/senai/usinagem/aluno/autenticar'
    const options = {
        method: 'POST',
        body: JSON.stringify(aluno)
    }

    console.log(aluno);

    const response = await fetch(url, options)

    console.log(response);

    const data = await response.json()

    return data
}

const aluno = {
    "email": "jainacinho@gmail.com",
    "senha": "senhaforte"
}

console.log(await autenticarAluno(aluno))