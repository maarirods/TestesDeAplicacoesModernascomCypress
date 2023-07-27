/// <reference types="cypress" />

describe('Dinamic tests', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food => {
        it(`Cadastro com a comida ${food}`, () => {
            cy.get('#formNome').type('Mariana')
            cy.get('#formSobrenome').type('Rodriguez')
            cy.get(`[name=formSexo][value=F]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Superior')
            cy.get('#formEsportes').select('Natacao')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })

    it.only('Deve selecionar todos usando o each', () => {
        cy.get('#formNome').type('Mariana')
        cy.get('#formSobrenome').type('Rodriguez')
        cy.get(`[name=formSexo][value=F]`).click()

        cy.get('[name=formComidaFavorita]').each($el => {
            // $el.click()
            if ($el.val() !== 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Superior')
        cy.get('#formEsportes').select('Natacao')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        // cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })

})