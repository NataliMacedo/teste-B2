import loc from './locators'
import 'cypress-file-upload';

//login
Cypress.Commands.add('login', (user, password)=>{
    cy.visit('http://mantis-prova.base2.com.br')
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
})


//Menu
Cypress.Commands.add('selecionar_projeto', (nome) =>{
    cy.xpath(loc.MENU.SELECIONAR_PROJETO).select(nome)
})

Cypress.Commands.add('ver_casos', () =>{
    cy.wait(300)
    cy.get(loc.MENU.VER_CASOS).click()
})

Cypress.Commands.add('relatar_casos', () =>{
    cy.wait(300)
    cy.get(loc.MENU.RELATAR_CASOS).click()
})


//Ver Casos
Cypress.Commands.add('filtrar_caso', (id) =>{
    cy.get(loc.VER_CASOS.PROCURAR).type(id)
    cy.get(loc.VER_CASOS.APLICAR_FILTRO).click()
    cy.existe_caso(id)
})

Cypress.Commands.add('existe_caso', (id) =>{
    cy.xpath(loc.VER_CASOS.LINHA(id)).should('exist')
})

Cypress.Commands.add('imprimir_relatorio', (casos_selecionados, tipo) =>{
    cy.get(loc.VER_CASOS.IMPRIMIR).click()

    if((casos_selecionados) == ('true')){
            cy.selecionar_caso('4003')
            cy.selecionar_caso('4005')
            cy.selecionar_caso('4008')
            cy.xpath(loc.VER_CASOS.MOSTRAR_CASOS_SELECIONADOS).click()
    }
    
    if((tipo) == ('html'))
        cy.xpath(loc.VER_CASOS.IMPRESSAO_HTML).click()
        cy.visit('https://mantis-prova.base2.com.br/view_all_bug_page.php')
})

Cypress.Commands.add('selecionar_caso', (id) =>{
    cy.xpath(loc.VER_CASOS.SELECIONAR(id)).check()
})

Cypress.Commands.add('editar_caso', (id, marcador, monitorar, doc, anotacao) =>{
    
    cy.xpath(loc.VER_CASOS.LINHA(id)).click()
        
    if((marcador) != (''))
        cy.get('#tag_select').select(marcador)
        cy.xpath(loc.VER_CASOS.APLICAR_MARCADOR).click()
    
    if((monitorar) == ('true'))
        cy.xpath(loc.VER_CASOS.MONITORAR).click()
        
    if((doc) != (''))
        cy.xpath(loc.RELATORIO.ESCOLHER_ARQUIVO).each(($el, index, $list) => { cy.upload_file(doc, 'Octet string', loc.RELATORIO.ESCOLHER_ARQUIVO); })

    if((anotacao) != (''))
        cy.xpath(loc.VER_CASOS.ANOTACAO).type(anotacao)
        cy.xpath(loc.VER_CASOS.ADICIONAR_ANOTACAO).click()
    
    cy.get(loc.MENU.VER_CASOS).click()
   
})

Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
    cy.xpath(selector).then(subject => {
      cy.fixture(fileName, 'base64')
        .then(Cypress.Blob.base64StringToBlob)
        .then(blob => {
          const el = subject[0]
          const testFile = new File([blob], fileName, { type: fileType })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(testFile)
          el.files = dataTransfer.files
        })
    })
});

Cypress.Commands.add('selecionar_todos_casos', () =>{
    cy.xpath(loc.VER_CASOS.SELECIONAR_TODOS).check()
})

//Relatar casos
Cypress.Commands.add('preencher_caso', (categoria, frequencia, gravidade, prioridade, perfil, resumo, descricao, passos, inf, doc, visibilidade, casos) => {
    
    if((categoria) != (''))
        cy.xpath(loc.RELATORIO.CATEGORIA).select(categoria)

    if((frequencia) != (''))
        cy.xpath(loc.RELATORIO.FREQUENCIA).select(frequencia)

    if((gravidade) != (''))
        cy.xpath(loc.RELATORIO.GRAVIDADE).select(gravidade)

    if((prioridade) != (''))
        cy.xpath(loc.RELATORIO.PRIORIDADE).select(prioridade)

    if((perfil) != ('')) 
        cy.xpath(loc.RELATORIO.PERFIL).select(perfil)

    if((resumo) != (''))
        cy.xpath(loc.RELATORIO.RESUMO).type(resumo)

    if((descricao) != (''))
        cy.xpath(loc.RELATORIO.DESCRICAO).type(descricao)

    if((passos) != (''))
        cy.xpath(loc.RELATORIO.PASSOS).type(passos)

    if((inf) != (''))
        cy.xpath(loc.RELATORIO.INF).type(inf)

    if((doc) != (''))
        cy.xpath(loc.RELATORIO.ESCOLHER_ARQUIVO).each(($el, index, $list) => { cy.upload_file(doc, 'Octet string', loc.RELATORIO.ESCOLHER_ARQUIVO); })
    
    if((visibilidade) != (''))
        cy.get(loc.RELATORIO.VISIBILIDADE(visibilidade)).click()
    cy.get(loc.RELATORIO.VISIBILIDADE(1))

    if((casos) == ('true'))
        cy.get('#report_stay').check()

})









