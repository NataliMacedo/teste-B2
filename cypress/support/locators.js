const locators = { 

    LOGIN: {
        USER: ':nth-child(2) > :nth-child(2) > input',
        PASSWORD: ':nth-child(3) > :nth-child(2) > input',
        BTN_LOGIN: '.button',
        
    },

    MENU:{
        SELECIONAR_PROJETO: `//select[contains(@name,'project_id')]`,
        VER_CASOS: '[href="/view_all_bug_page.php"]',
        RELATAR_CASOS: '[href="/bug_report_page.php"]',
        MINHA_VISAO: '[href="/my_view_page.php"]',
    },

    RELATORIO:{
        CATEGORIA: `//select[contains(@name, 'category_id')]`,
        FREQUENCIA: `//select[contains(@name,'reproducibility')]`,
        GRAVIDADE: `//select[contains(@name,'severity')]`,
        PRIORIDADE: `//select[contains(@name,'priority')]`,
        PERFIL: `//select[contains(@name,'profile_id')]`,
        RESUMO: `//input[contains(@name,'summary')]`,
        DESCRICAO: `//textarea[contains(@name,'description')]`,
        PASSOS: `//textarea[contains(@name,'steps_to_reproduce')]`,
        INF: `//textarea[contains(@name,'additional_info')]`,
        ESCOLHER_ARQUIVO: `//input[contains(@name, 'ufile[]')]`,
        VISIBILIDADE: tipo => `:nth-child(13) > :nth-child(2) > :nth-child(${tipo})`
    },

    VER_CASOS: {
        PROCURAR: '#filters_form_closed > .width100 > tbody > tr > :nth-child(1) > [type="text"]',
        APLICAR_FILTRO: '#filters_form_closed > .width100 > tbody > tr > :nth-child(1) > .button-small',
        LINHA: id => `//td[contains(., ${id})]`,
        APLICAR_MARCADOR: `//input[contains(@value, 'Aplicar')]`,
        MONITORAR: `//input[contains(@value, 'Monitorar')]`,
        ANOTACAO: `//textarea[contains(@name, 'bugnote_text')]`,
        ADICIONAR_ANOTACAO: `//input[contains(@value, 'Adicionar Anotação')]`,
        SELECIONAR: id => `//input[contains(@value, ${id})]`,
        IMPRIMIR: '[href="print_all_bug_page.php"]',
        MOSTRAR_CASOS_SELECIONADOS: `//input[contains(@value, 'Mostrar apenas os selecionados')]`,
        IMPRESSAO_WORD:`//td//a/*[contains(@src, 'https://mantis-prova.base2.com.br/images/fileicons/doc.gif')]`,
        IMPRESSAO_HTML:`//td//a/*[contains(@src, 'https://mantis-prova.base2.com.br/images/ie.gif')]`,
        SELECIONAR_TODOS: `//input[contains(@name, 'all_bugs')]`                               
   }
   
}

export default locators;