var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            
                nome: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '51999999999',
                endereco: {
                    cep: '91920290',
                    rua: 'Rua João Mora',
                    numero: '1024',
                    complemento: '142',
                    bairro: 'Camaquã',
                    cidade_uf: 'Porto Alegre/RS'
                },
                metodo_entrega: 'Moto',
                cnh: 'cnh-digital.jpg'
            }

            return data
        }

        
    }
