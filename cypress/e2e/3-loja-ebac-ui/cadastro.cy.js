///<reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade:Cadastro', () => {
   
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
     });
     
    it('Deve completa o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email()) 
        cy.get('#reg_password').type('teste1234@')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
       
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')


    });
    it('Deve completa o cadastro com sucesso- Usando variaveis ', () => {
        var nome= faker.person.firstName()
        var email= faker.internet.email(nome)
        var sobrenome= faker.person.lastName()
        
        
        
        cy.get('#reg_email').type(faker.internet.email()) 
        cy.get('#reg_password').type('teste1234@')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
       
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

        
        
    });
});