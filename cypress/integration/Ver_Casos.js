///<reference types="cypress" />

import '../support/commands'
import loc from '../support/locators'


describe('Verificar casos', () => {

        beforeEach(() =>{       
            cy.login('natali.silva','mantis2020')
        })
        
        it('Filtrar caso cadastrado ', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.ver_casos()
            cy.filtrar_caso('4005')
        })  
        
        it('Editar caso cadastrado ', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.ver_casos()
            cy.existe_caso('4003')
            cy.editar_caso('4003','Teste','true','teste', 'caso editado')
            cy.existe_caso('4003')
        })
        
        it('Imprimir relatório de todos casos cadastrados ', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.ver_casos()
            cy.imprimir_relatorio('false','html')              
        }) 
        
        it('Imprimir relatório dos casos selecionados ', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.ver_casos()
            cy.imprimir_relatorio('true','html')   
        }) 
        
        it('Aplicar anotações a todos os casos cadastrados ', () =>{
            cy.selecionar_projeto('Natali da Silva´s Project')
            cy.ver_casos()
            cy.selecionar_todos_casos()
            cy.get('.floatleft > select').select('Adicionar Anotação')
            cy.get('.button').click()
            cy.xpath(loc.VER_CASOS.ANOTACAO).type('Anotação geral.')
            cy.get('.button').click()
        })
        
})