describe('CPF', () => {  
    it('Invalid + Valid data', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://cadastramento-demo.mercafacil.com/home')
      cy.scrollTo('bottom')
  
      cy.fixture('registerData').then((data) => {
        cy.get('.mr-5').click()
        cy.get('input[name="cpfCnpj"]').type(data.access.invalidCpf).clear().type(data.access.cpf)
        cy.get('button[style*="background-color: rgb(103, 116, 67)"]').click()
        cy.wait(1000)
        
        cy.findByLabelText('Nome').type(data.cpf.invalidName).clear().type(data.cpf.name)
        cy.findByLabelText('Sobrenome').type(data.cpf.invalidSurname).clear().type(data.cpf.surname)
        cy.findByLabelText('Celular').type(data.general.invalidcellphone).clear().type(data.general.cellphone)
        cy.get('input[name="email"]').type(data.general.invalidEmail).clear().type(data.general.email)
        cy.findByLabelText('Data de nascimento').type(data.cpf.invalidBirth).clear().type(data.cpf.birthDate)
        cy.get('input[name="cep"]').type(data.general.invalidZipcode).clear().type(data.general.zipcode)
        cy.findByLabelText('Número').type(data.general.invalidNumber).clear().type(data.general.number)
        cy.findByLabelText('Complemento').type(data.general.addressComplement)
        cy.findByLabelText('Ponto de Referencia').type(data.general.addressReference)
        cy.findByLabelText('Senha').type(data.general.inavlidPassword).clear().type(data.general.password)
        cy.findByLabelText('Confirme sua senha').type(data.general.inavlidPassword).clear().type(data.general.confirmPassword)
        cy.get('.checkbox-area').click()
        cy.get('button.button-height.v-btn.v-btn--contained.theme--light.v-size--default.mr-5').scrollIntoView().should('be.visible').click()
        cy.get('button.v-btn--flat').contains('cancelar').should('be.visible').click()
        
      })
    })
  })