describe('Merca', () => {  
  it('passes', () => {
    //cy.viewport(640, 480)
    cy.viewport(1920, 1080)
    cy.visit('https://cadastramento-demo.mercafacil.com/home')
    cy.scrollTo('bottom')

    cy.fixture('registerData').then((data) => {

      // HOME
      cy.get('.mr-5').click()
      cy.get('input[name="cpfCnpj"]').type(data.access.invalidCnpj).clear().type(data.access.cnpj)
      cy.get('button[style*="background-color: rgb(103, 116, 67)"]').click()
      cy.wait(1000)

      // REGISTER PAGE
      // MANDATORY FIELDS
      cy.get('div[style*="background-color: rgb(19, 29, 101)"]').should('be.visible') // VOLTAR
      cy.get('input[name="state_registration"]').type(data.cnpj.stateRegistration)
      cy.get('input[name="name"]').type(data.cnpj.fantasyName)
      cy.get('input[name="phone"]').type(data.general.cellphone)
      cy.get('input[name="email"]').type(data.general.email)
      cy.get('input[name="landline"]').type(data.cnpj.phoneContact)
      /*
      cy.get('input[name="cep"]').type(data.general.zipcode)
      cy.get('input[name="uf"]').tab()
      cy.findByLabelText('Cidade').tab()
      cy.findByLabelText('Bairro').type(data.general.district)
      cy.findByLabelText('Rua').type(data.general.street)
      */
      cy.findByLabelText('Número').type(data.general.number)
      cy.findByLabelText('Complemento').type(data.general.addressComplement)
      cy.findByLabelText('Ponto de Referencia').type(data.general.addressReference)
      cy.findByLabelText('Senha').type(data.general.password)
      cy.findByLabelText('Confirme sua senha').type(data.general.confirmPassword)
      
      cy.get('.checkbox-area').click()
      cy.get('button.button-height.v-btn.v-btn--contained.theme--light.v-size--default.mr-5').scrollIntoView().should('be.visible').click()
      cy.get('button.v-btn--flat').contains('cancelar').should('be.visible') //.click()
    })
  })
})