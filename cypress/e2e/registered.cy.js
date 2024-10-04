describe('CPF', () => {  
    it('Registered', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://cadastramento-demo.mercafacil.com/home')
      cy.scrollTo('bottom')
  
      cy.fixture('registerData').then((data) => {
        cy.get('.mr-5').click()
        cy.get('input[name="cpfCnpj"]').type(data.access.registeredCpf)
        cy.get('button[style*="background-color: rgb(103, 116, 67)"]').click()
        
        
      })
    })
  })