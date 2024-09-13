///<reference types="cypress"/>
import produtoPage from "../../support/produto.page";
describe('Funcionalidade: Produtos', () => {

   beforeEach(() => {
    
      produtoPage.visitarUrl()
      //cy.viewport(1920,1080)
   });
   
   it('Deve selecionar um produto da lista', () => {
      console.log("passou aqui!!!")
       produtoPage.buscarProdutoLista('Abominable Hoodie')

       cy.get('#tab-title-description > a').should('contain' , 'Descrição')
   });
   
   it('Deve buscar um produto com sucesso.', () => {
      let produto = 'Eos V-Neck Hoodie'
      produtoPage.buscarProduto(produto)
      cy.get('.product_title').should('contain', produto)
      
   });

   it('Deve visitar a página do produto', () => {
      produtoPage.visitarProduto('Stellar-Solar-Jacket')
      //cy.get('.product_title').should('contain', produto)
   });

   it('Deve adicionar um produto ao carrinho', () => {
      let qtd = 1
      let tamanho = "M"
      let cor = "Green"
      //produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
      produtoPage.buscarProduto('Abominable Hoodie')
      //cy.get(`[data-value=${tamanho}]`).click()
      cy.getWvstooltip(tamanho).click()
      cy.getWvstooltip(cor).click()
      cy.get('[name="quantity"]').clear().type(1)
      cy.wait(500)
      cy.get('.single_add_to_cart_button').click()
      cy.wait(500)

      cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')
   });

   it('Deve adicionar mais de um produto ao carrinho', () => {
      let qtd = 3
      let tamanho = "M"
      let cor = "Green"
      let nome_produto = "Ariel Roll Sleeve Sweatshirt"

      produtoPage.buscarProduto(nome_produto)
      produtoPage.addProdutoCarrinho(tamanho, cor,  qtd)

      //cy.get('.woocommerce-message').should('contain', qtd + ' x “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
      cy.get('.woocommerce-message').should('contain', '3 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
   });

   it('Deve adicionar o produto ao carrinho buscando da  massa de dados', () => {
      cy.fixture('produtos').then(dados => {
         produtoPage.buscarProduto(dados[1].nomeProduto)
         produtoPage.addProdutoCarrinho(
            dados[1].tamanho, 
            dados[1].cor, 
            dados[1].quantidade)
         
         cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
         
      })
      
      //let qtd = 1
      //produtoPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
      //produtoPage.addProdutoCarrinho('M', 'Red', 1)

      //cy.get('.woocommerce-message').should('contain', qtd + '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')
   });

});