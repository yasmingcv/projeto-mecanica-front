'use strict'


import {getTurmas} from '../api/api.js'

export function carregarCardTurma(turmaAluno) {

    const divCard = document.createElement('div');
    divCard.classList.add('turma');

    const nameTurma = document.createElement('span');
    nameTurma.classList.add('nome_turma');
    nameTurma.textContent = `${turmaAluno.curso}`;

    const nameAnoTurma = document.createElement('span');
    nameAnoTurma.classList.add('ano_turma');
    nameAnoTurma.textContent = turmaAluno.ano;

    divCard.append( nameTurma, nameAnoTurma);

    return divCard;
}

export const carregarTurma = async () => {
    const divCard = document.createElement('div');
    divCard.classList.add('cards_turma');

    const cardPrincipal = document.getElementById('cards_turma');
    cardPrincipal.append(divCard);

    const response = await getTurmas(); // Obter a resposta da API
    const turmas = response.turmas; // Acessar a propriedade 'turmas' nos dados retornados

    if (Array.isArray(turmas)) { // Verificar se 'turmas' é uma matriz
        const cards = turmas.map(carregarCardTurma); // Mapear as turmas para os cards
        divCard.replaceChildren(...cards);
    } else {
        // Tratar o caso em que 'turmas' não é uma matriz
        console.error('Os dados das turmas não estão no formato esperado.');
    }
}

carregarTurma();