///<reference types="cypress" />

import '../support/commands'


describe('Relatos de casos', () => {

        beforeEach(() =>{       
            cy.login('natali.silva','mantis2020')
        })
            
        it('Relatar caso com preenchimento apenas dos campos obrigatórios', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.relatar_caso()
            cy.preencher_caso('[Todos os Projetos] Teste', '', '', '', '',
                            'Erro de ortografia',
                            'Na página de cadastro a palavra turma está escrita como turmas.',
                            '','','','','')
            cy.get('.button').click()
            cy.get('[align="center"]').should('contain', 'Operação realizada com sucesso.')
        }) 

        it('Relatar caso com preenchimento de todos os campos, realizando outro relato em sequência(campos obrigatórios)', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.relatar_caso()
            cy.preencher_caso('[Todos os Projetos] Apptest', 'sempre', 'pequeno', 'baixa', 'PC Windows 7', 
                            'Botão Empréstimo desalinhado',
                            'Ao incluir mais de 10 livros para empréstimo, o botão empréstimo fica desalinhado.',
                            'Incluir mais de 10 livros; Verificar botão desalinhado;',
                            'Com um número menor que 10 o erro não ocorre.',
                            'teste', 2, 'true')
            cy.get('.button').click()
            cy.get('[align="center"]').should('contain', 'Operação realizada com sucesso.')
            cy.get('.button').click()
            cy.preencher_caso('[Todos os Projetos] Teste', '', '', '', '',
                            'Erro de ortografia',
                            'Na página de cadastro a palavra cidade está escrita como cidad.',
                            '','','','','')
            cy.get('.button').click()

        }) 

        it('Validar obrigatoriedade dos campos', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.relatar_caso()
            cy.preencher_caso('', '', '', '', '',
                            'Botão Reserva desalinhado', 
                            '1- incluir mais de 50 livros; 2- verificar botão desalinhar;','','','','','')
            cy.get('.button').click()
            cy.get('.form-title').should('contain', 'APPLICATION ERROR #11') 
            cy.relatar_caso('[Todos os Projetos] Teste', '', '', '', '', '','ncluir mais de 50 livros; 2- verificar botão desalinhar;', '','','','','')
            cy.get('.button').click()
            cy.get('.form-title').should('contain', 'APPLICATION ERROR #11') 
            cy.relatar_caso('[Todos os Projetos] Teste', '', '', '', '', 'Botão Reserva desalinhado', '', '','','','','')
            cy.get('.button').click()
            cy.get('.form-title').should('contain', 'APPLICATION ERROR #11') 

        }) 

})