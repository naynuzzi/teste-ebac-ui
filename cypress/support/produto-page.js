class ProdutoPage{

     visitarUrl(){
     cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
      cy.get('[name="s"]').eq(1).type(nomeProduto)
      cy.get('.button-search').eq(1).click()
    }
    BuscarProdutoLista(nomeProduto){
      cy.get('.product-block ')
      .contains(nomeProduto)
      .click()
    }
    VisitarProduto(nomeProduto){
     //cy.visit(`produto/${nomeProduto}`)
      const urlFormatada = nomeProduto.replace(/ /g, '-')
      cy.visit(`produtos/${urlFormatada}`)
    }
    addProdutoCarrinho(tamanho, cor, quantidade){
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
    }
  
}
export default new ProdutoPage()
