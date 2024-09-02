///<reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    
        
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login =>{
            cy.login(login.usuario, login.senha) 
        })
        
    });

    it('Deve completa detalhes da conta com sucesso', () => {
       cy.detalhesConta('Nay', 'Nuz','Nanztest.qa')
       cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });


})
