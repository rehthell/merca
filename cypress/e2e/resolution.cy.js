describe('Resolution + Mandatory fields', () => {  
    beforeEach(() => {
      cy.fixture('registerData').as('data')
    })
  
    it('passes', function() {
      const viewports = [
        { width: 640, height: 480, isMobile: true },   // Mobile
        { width: 1920, height: 1080, isMobile: false } // Desktop
      ]
  
      viewports.forEach((viewport) => {
        cy.viewport(viewport.width, viewport.height)
        cy.visit('https://cadastramento-demo.mercafacil.com/home')
        cy.scrollTo('bottom')
  
        // HOME
        cy.get('.mr-5').click()
        cy.get('input[name="cpfCnpj"]').type(this.data.access.invalidCnpj).clear().type(this.data.access.cnpj)
        cy.get('button[style*="background-color: rgb(103, 116, 67)"]').click()         

        cy.get('input[name="state_registration"]').tab()
        cy.get('input[name="name"]').tab()
        cy.get('input[name="phone"]').tab()
        cy.get('input[name="email"]').tab()
        cy.get('input[name="landline"]').tab()      
        cy.get('input[name="cep"]').tab() 
        cy.findByLabelText('Bairro').tab()
        cy.findByLabelText('Rua').tab()        
        cy.findByLabelText('Número').tab()
        cy.findByLabelText('Complemento').tab()
        cy.findByLabelText('Ponto de Referencia').tab()
        cy.findByLabelText('Senha').tab()
        cy.findByLabelText('Confirme sua senha').tab()  
        
        cy.get('button.v-btn--flat').contains('cancelar').should('be.visible')//.click()
      })
    })
  })