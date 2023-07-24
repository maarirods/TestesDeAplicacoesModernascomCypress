/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = { nome: 'Rods', idade: 30 }
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('Mariana')
        cy.get('[data-cy=dataSobrenome]').then($el => {
            cy.wrap($el).type('Rodriguez Nascimento')
        })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botao'))
        //promise.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonListDOM').then(() => console.log('Encontrei o segundo botao'))

        cy.wrap(1).should(num => {
            return 2
        }).should('be.equal', 1)
    })


    it('Its...', () => {
        const obj = { nome: 'Rods', idade: 30 }
        cy.wrap(obj).should('have.property', 'nome', 'Rods')
        cy.wrap(obj).its('nome').should('be.equal', 'Rods')

        const obj2 = { nome: 'Rods', idade: 30, endereco: { rua: 'Av. Paulista' } }
        cy.wrap(obj2).its('endereco.rua').should('contains', 'Paulista')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it.only('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a,b) => a+b

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal',1)
        cy.wrap({fn: soma}).invoke('fn',2,5).should('be.equal',7)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val','Texto via invoke')
        cy.window().invoke('alert','Na sua máquina funcionou?')
        cy.get('#resultado')
        .invoke('html', '<input type="button"', 'value="hacked!"/>')

    })


})
