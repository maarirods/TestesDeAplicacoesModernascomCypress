/// <reference types="cypress" />

describe('Esperas', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
    cy.reload()
    })

    it('Deve aguardar elementos estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')

    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')

    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')
    })

    it('Uso do TimeOut', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo').should('exist')

        //cy.get('#buttonList').click()
        //cy.wait(5000)
        //cy.get('#lista li span', {timeout:30000})
        //.should('contain', 'Item 2')

        cy.get('#buttonList').click()
        cy.get('#lista li span')
            .should('have.length', '1')
        cy.get('#lista li span')
            .should('have.length', '2')
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it.only('Should Vs Then', () => {
        cy.get('#buttonList').then($el => {
            //.should('have.length',1)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        }) //.and('have.id','buttonList')
            
    })
})
