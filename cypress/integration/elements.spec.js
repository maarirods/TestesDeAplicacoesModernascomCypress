/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

        // TODO Validar encontro de texto
    })

    it('Links', () => {
        //cy.get('a').click()
        cy.get('a').first().click()
        // cy.get('#resultado').should('have.text', 'Voltou!')
        cy.reload()
        cy.contains('Voltar').click()

        // TODO Validar clique em links
    })

    it('Textfields', () => {
        cy.get('#formNome').type('Cypress Teste')
        cy.get('#formNome').should('have.value', 'Cypress Teste')

        cy.get('#elementosForm\\:sugestoes')
            .type('Area teste de texto')
            .should('have.value', 'Area teste de texto')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Campo um')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}', { delay: 100 })
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100 })
            .should('have.value', 'acerto')

            // TODO Validar os campos de texto

    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)

        // TODO Validar as opções do radioButton

    })

    it('CheckBox', () => {
        cy.get('#formComidaVegetariana')
            .click()
            .should('be.checked')

        cy.get('#formComidaCarne')
            .should('not.be.checked')

        cy.get('#formComidaFrango')
            .should('not.be.checked')

        cy.get('#formComidaPizza')
            .should('not.be.checked')

        cy.get("[name='formComidaFavorita']").click({ multiple: true })

        // TODO Validar as opções do checkBox

    })

    it('ComboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')

            // TODO Validar as opções do comboBox
    })

    it('ComboMultiple', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'futebol'])      
        
        // TODO Validar as opções selecionadas do combo multiplo
    })
})