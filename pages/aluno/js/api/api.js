'use strict'

export const getTurmas = async() => {

    const url = `https://backend-usinagem.cyclic.app/v1/senai/usinagem/turma`

    const response = await fetch(url)
    const data = await response.json()
    

    return data
}