///<reference types="cypress"/>
import produtoPage from "../../support/produto-page";
describe('Funcionalidade: Produtos', () => {
   
   beforeEach(() => {
    
      produtoPage.visitarUrl()
   
   });
   
   it('Deve selecionar um produto da lista', () => {
       produtoPage.BuscarProdutoLista('Abominable Hoodie')

       cy.get('#tab-title-description > a').should('contain' , 'Descrição')
   });
   
   it('Deve buscar um produto com sucesso.', () => {
      let produto = 'Eos V-Neck Hoodie'
      produtoPage.buscarProduto(produto)
      cy.get('.product_title').should('contain', produto)
      
   });

   it('Deve visitar a pagina do produto', () => {
      produtoPage.VisitarProduto('Stellar-Solar-Jacket')
   });
   it.only('Deve adicionar o produto ao carrinho', () => {
      produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
      produtoPage.addProdutoCarrinho()
   });

})