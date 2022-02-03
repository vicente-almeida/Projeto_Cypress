import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'


describe('Cadastro', () => {

    //beforeEach(function () {
    // cy.fixture('deliver').then((d) => {
    //this.deliver = d

    // })

    // })

    it('Usuário deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()
        signup.acessarAplicacao()
        signup.preencheFormulario(deliver)
        signup.submeteFormulario()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.validaFormulario(expectedMessage)

    })



    it('CPF incorreto', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '00ws25#20%%'
        signup.acessarAplicacao()
        signup.preencheFormulario(deliver)
        signup.submeteFormulario()
        signup.alertaDeCpfInvalido('Oops! CPF inválido')






    })

    it('Email incorreto', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'viscondeavip.com.br'
        signup.acessarAplicacao()
        signup.preencheFormulario(deliver)
        signup.submeteFormulario()
        signup.alertaDeEmailInvalido('Oops! Email com formato inválido.')

    })
})