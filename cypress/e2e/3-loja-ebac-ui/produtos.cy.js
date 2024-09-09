///<reference types="cypress"/>
import produtoPage from "../../support/produto.page";
describe('Funcionalidade: Produtos', () => {
   
   beforeEach(() => {
    
      produtoPage.visitarUrl()
   
   });
   
   it('Deve selecionar um produto da lista', () => {
      console.log("passou aqui!!!")
       produtoPage.BuscarProdutoLista('Abominable Hoodie')

       cy.get('#tab-title-description > a').should('contain' , 'Descrição')
   });
   
   it('Deve buscar um produto com sucesso.', () => {
      let produto = 'Eos V-Neck Hoodie'
      produtoPage.buscarProduto(produto)
      cy.get('.product_title').should('contain', produto)
      
   });

   it('Deve visitar a página do produto', () => {
      produtoPage.VisitarProduto('Stellar-Solar-Jacket')
      //cy.get('.product_title').should('contain', produto)
   });
   it.only('Deve adicionar o produto ao carrinho', () => {
      let qtd = 1
      //produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
      produtoPage.buscarProduto('Abominable Hoodie')
      //produtoPage.addProdutoCarrinho('M', 'Red', qtd)
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()

      cy.get('.woocommerce-message').should('contain', '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')
   });
   it('Deve adicionar o produto ao carrinho buscando da  massa de dados', () => {
      cy.fixture('produtos').then(dados =>{
         
      
      produtoPage.buscarProduto(dados[1].nomeProduto)
      produtoPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
      
      cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
         
      })
      
      let qtd = 1
      produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
      produtoPage.addProdutoCarrinho('M', 'Red', 1)

      cy.get('.woocommerce-message').should('contain', qtd + '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')
   });

});