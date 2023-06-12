'use strict'


/********************************************* card adicionar materia turma e aluno  *********************************/

class card_Adicionar extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.titulo = 'Adicionar um ttitulo'
        this.sub_titulo = 'adicionar sub-titulo'
        this.sub_titulo2 = 'adicionar'
    }

    static get observedAttributes() {
        return ['foto', 'titulo', 'sub_titulo', 'sub_titulo2' ]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent =
            `
        .cards_matria{
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 400px;
            border-radius: 20px ;
            border: 1px solid  #4F83B4;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
            align-items: center;
        }
        
        .img_cards{
            width: 100%;
            height: 200px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        
        .nome{
            font-weight: 1000;
            font-size: 1.5rem;
            font-family: 'Poppins', sans-serif;
            color:#4F83B4;
            padding: 15px;
        }
        
        .descricao{
            font-weight: 100;
            font-size: 1.1rem;
            font-family: 'Poppins', sans-serif;
            color: black;
        }
        
        `
        return css
    }

    component(){

        const card = document.createElement('a')
        card.classList.add('cards_matria')

        const foto = document.createElement('img')
        foto.classList.add('img_cards')
        foto.src = `${this.foto}`
        

        const titulo = document.createElement('span')
        titulo.classList.add('nome')
        titulo.textContent = this.titulo

        const sub_titulo = document.createElement('span')
        sub_titulo.classList.add('descricao')
        sub_titulo.textContent = this.sub_titulo

        const sub_titulo2 = document.createElement('span')
        sub_titulo2.classList.add('descricao')
        sub_titulo2.textContent = this.sub_titulo2

        card.append(foto,titulo,sub_titulo, sub_titulo2)

        return card

        
    }
}

customElements.define('card-adicionar', card_Adicionar)



// img_cards
// nome
// descricao

/********************************************* card aluno *********************************/

class card_aluno extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.name = 'nome do aluno'
        this.turma = 'Sigla'
    }

    static get observedAttributes() {
        return ['foto', 'name', 'turma',]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent =
            `
            .card{
                display: flex;
                align-items: center;
                gap: 20px;
                width: 200px;
                height: 100px;
                background-color: aliceblue;
                border-radius: 10px;
            }
            
            .img_aluno{
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            
            .text_alunos{
                width: max-content;
                height: max-content;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .name{
                font-weight: 500;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                color: #4F83B4;
            }
            
            .turma{
                font-weight: 500;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                color: #4F83B4;
            }
        
        `
        return css
    }

    component(){

        const card = document.createElement('div')
        card.classList.add('card')

        const foto = document.createElement('img')
        foto.classList.add('img_aluno')
        foto.src = `${this.foto}`
        

        const text_alunos = document.createElement('div')
        text_alunos.classList.add('text_alunos')
        
        const name = document.createElement('span')
        name.classList.add('name')
        name.textContent = this.name

        const turma = document.createElement('span')
        turma.classList.add('turma')
        turma.textContent = this.turma

        text_alunos.append( name, turma)

        card.append(foto,text_alunos)

        return card

        
    }
}

customElements.define('card-aluno', card_aluno)


/***************** card onde aluno possa ver os cursos que estão cursnado ******************/


class card_curso_aluno extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = null
        this.nome_curso = 'nome do aluno'
        this.turma = 'Sigla'
        this.periodo = 'Manhã'
    }

    static get observedAttributes() {
        return ['foto', 'nome_curso', 'turma','periodo']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent =
            `
            .cards_matria{
                display: flex;
                flex-direction: column;
                width: 300px;
                height: 400px;
                border-radius: 20px ;
                border: 1px solid  #4F83B4;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
                
                gap :  20px;
            }
            
            .img_cards{
                width: 100%;
                height: 200px;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }
            
            .nome{
                font-weight: 1000;
                font-size: 1.5rem;
                font-family: 'Poppins', sans-serif;
                color:#4F83B4;
                padding-left:3px ;
            }
            
            .descricao{
                font-weight: 1000;
                font-size: 1.5rem;
                font-family: 'Poppins', sans-serif;
                color: #4F83B4;
                padding-left:3px ;
            }
        
        `
        return css
    }

    component(){

        const card = document.createElement('div')
        card.classList.add('cards_matria')

        const foto = document.createElement('img')
        foto.classList.add('img_cards')
        foto.src = `${this.foto}`
        

        const nome_curso = document.createElement('span')
        nome_curso.classList.add('nome')
        nome_curso.textContent = this.nome_curso

        const turma = document.createElement('span')
        turma.classList.add('descricao')
        turma.textContent = this.turma

        const periodo = document.createElement('span')
        periodo.classList.add('descricao')
        periodo.textContent = this.periodo

        card.append(foto, nome_curso, turma, periodo)

        return card
    }
}

customElements.define('card-curso-aluno', card_curso_aluno)
