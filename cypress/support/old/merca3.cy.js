describe('Merca', () => {  
    beforeEach(() => {
      cy.fixture('registerData').as('data')
    })
  
    it('passes', function() {
      const viewports = [
        { width: 1280, height: 720, isMobile: true },   // Mobile
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
  
        cy.wait(1000)
  
        if (viewport.isMobile) {
          cy.get('.redirect').should('be.visible') // versão mobile
        } else {
          cy.get('div[style*="background-color: rgb(19, 29, 101)"]').should('be.visible') // versão web
        }
  
        cy.get('div[style*="background-color: rgb(19, 29, 101)"]').should('be.visible') // VOLTAR
        cy.get('input[name="state_registration"]').type(this.data.cnpj.stateRegistration)
        cy.get('input[name="name"]').type(this.data.cnpj.fantasyName)
        cy.get('input[name="phone"]').type(this.data.general.cellphone)
        cy.get('input[name="email"]').type(this.data.general.email)
        cy.get('input[name="landline"]').type(this.data.cnpj.phoneContact)        
        cy.get('input[name="cep"]').type(this.data.general.zipcode)
        /*
        cy.get('input[name="uf"]').click()
        cy.get('input[name="AC"]')
        cy.findByLabelText('Cidade').type(this.data.general.district)
        cy.findByLabelText('Bairro').type(this.data.general.district)
        cy.findByLabelText('Rua').type(this.data.general.street)
        */
        cy.findByLabelText('Número').type(this.data.general.number)
        cy.findByLabelText('Complemento').type(this.data.general.addressComplement)
        cy.findByLabelText('Ponto de Referencia').type(this.data.general.addressReference)
        cy.findByLabelText('Senha').type(this.data.general.password)
        cy.findByLabelText('Confirme sua senha').type(this.data.general.confirmPassword)
  
        if (viewport.isMobile) {
          cy.get('button[style*="background-color: rgb(19, 29, 101)"]').scrollIntoView().should('be.visible').click()
        } else {
          cy.get('button.button-height.v-btn.v-btn--contained.theme--light.v-size--default.mr-5').scrollIntoView().should('be.visible').dblclick()
        }
        cy.get('button.v-btn--flat').contains('cancelar').should('be.visible')
      })
    })
  })