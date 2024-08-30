
///<reference types="cypress"/>

describe('Funcionalidade: login', () => {
   
   beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });
   
   afterEach(() => {
      cy.screenshot()
   
   });

   it('Deve fazer login com sucesso', () => {
   
      cy.get('#username').type('naynuztest@teste.com.br')
      cy.get('#password').type('ayla1234')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, naynuztest (não é naynuztest? Sair)')
   })

   it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
      
      cy.get('#username').type('nnnnnppp@teste.com.br')
      cy.get('#password').type('ayla1234')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error').should('exist')

   });

   it('Deve exibir um mensagem de erro ao inserir senha inválido', () => {
      
      cy.get('#username').type('naynuztest@teste.com.br')
      cy.get('#password').type('xxxpp')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail naynuztest@teste.com.br está incorreta. Perdeu a senha?')
      cy.get('.woocommerce-error').should('exist')
      
   });

})