
///<reference types="cypress"/>

// describe('example to-do app', () => {
//    beforeEach(() => {
//      // Cypress starts out with a blank slate for each test
//      // so we must tell it to visit our website with the `cy.visit()` command.
//      // Since we want to visit the same URL at the start of all our tests,
//      // we include it in our beforeEach function so that it runs before each test
//      cy.visit('https://example.cypress.io/todo')
//    })
// })

describe('Funcionalidade: login', () => {

   it('Deve fazer login com sucesso', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('naynuztest@teste.com.br')
      cy.get('#password').type('ayla1234')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, naynuztest (não é naynuztest? Sair)')
   })
})