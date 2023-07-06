/// <reference types="cypress" />

it.skip('A external test...', () => {

})

describe('Should group test...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })
})

    describe('Should group more specific tests 2...', () => {
        it.only('A specific test 2...', () => {
        })
    })



    it.skip('A internal test...', () => {

    })
})