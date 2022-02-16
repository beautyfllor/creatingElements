'use strict'

const container = document.querySelector('main')

function criarElementoInnerHTML() {
    container.innerHTML += `
        <div>
            <button>ok</button>
            <input type="radio">
        </div>`
}

function criarElementoAppendChild(numero){
    //1- Criar
    const novaDiv = document.createElement('div')

    //2 - Configurar
    novaDiv.textContent = numero

    //3 - inserir
    container.appendChild(novaDiv)
}

function criarElementoInsertBefore(){
    //1- Criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5')

    //2 - Configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = 7

    //3 - inserir
    container.insertBefore(novaDiv, quintaDiv)
}

function criarElementoReplaceChild(){
    //1- Criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5')

    //2 - Configurar
    novaDiv.id = "sete"
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = 7

    //3 - inserir
    container.replaceChild(novaDiv, quintaDiv)
}

function criarElementoReplaceChildren(numero){
    //1- Criar
    const novaDiv = document.createElement('div')

    //2 - Configurar
    novaDiv.textContent = numero

    //3 - inserir
    container.replaceChildren(novaDiv)
}

for(let i = 0; i <= 50; i++) {
    criarElementoAppendChild(i)
}