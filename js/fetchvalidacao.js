'use strict'

export const autenticarAluno = async (aluno) => {
    const url = 'https://backend-usinagem.cyclic.app/v1/senai/usinagem/aluno/autenticar'
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

    return await data
}
