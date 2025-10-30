# 📋 Projeto Parte 1: Estrutura HTML

Este diretório (/parte-1/) contém a primeira entrega do projeto, focada exclusivamente na fundação do site com HTML5 semântico.

## 🛠 Verificação ddos Requisitos
- [X] 3 Páginas HTML: index.html, projetos.html, cadastro.html.

- [X] Estrutura Semântica: Uso de </header/>, </nav/>, </main/>, </section/>, </footer/>, </address/>, </fieldset/> e </legend/>.

- [X] Hierarquia de Títulos: Uso lógico de </h1/>, </h2/> etc.

- [X] Imagens: Todas as 3 páginas contêm tags <img> com o atributo alt.

- [X] Formulário Complexo: cadastro.html possui todos os campos solicitados (type="email", type="date", type="tel", etc.).

- [X] Validação Nativa: Uso de required em todos os campos obrigatórios.

- [X] Agrupamento Lógico: Uso de </fieldset/> e </legend/> no formulário.

- [X] "Máscaras" HTML5: Uso dos atributos pattern e placeholder para validar o formato de CPF, CEP e Telefone, conforme requisitado para uma entrega "somente HTML".


# 📋 Projeto Parte 2: CSS e Responsividade

Esta pasta contém a segunda entrega do projeto, focada na aplicação de CSS3 avançado para transformar a estrutura HTML da Parte 1.

O HTML foi atualizado para incluir um sistema de design, layouts responsivos e componentes de UI interativos, todos organizados numa estrutura de pastas modular.

#### Destaques Técnicos:

Sistema de Design: Foi definido um sistema completo em `assets/css/style.css` usando Variáveis CSS (`:root`) para uma paleta de +8 cores, +5 tamanhos de fonte e espaçamento modular (baseado em 8px).

Layouts Responsivos: O site usa CSS Grid para a estrutura principal e um sistema de 12 colunas para o conteúdo. Flexbox é usado para alinhar componentes internos (como o menu).

Responsividade: O layout adapta-se a todos os ecrãs usando 5 breakpoints principais (mobile, tablet, desktop).

Navegação Interativa (JS): Foi implementado um menu hambúrguer funcional para mobile e um submenu dropdown para desktop.

Componentes de UI:

Cards: A página de projetos usa `.card` responsivos com `.tags`.

Botões: Todos os botões (como `.btn`) têm estados de `:hover`, `:focus`, etc.

Formulários: O formulário de cadastro está estilizado e usa JavaScript (`main.js`) para aplicar máscaras de input (CPF, Telefone, CEP) e CSS (`:invalid`) para validação visual.

Feedback: O site inclui um Modal de "Boas-Vindas" (na index.html) e componentes de `.alert`.


# 📋 Projeto Web - parte 3: JavaScript Avançado e SPA

Esta pasta contém a terceira entrega do projeto, focada na transformação do site estático (da Parte 2) numa Single Page Application (SPA) dinâmica e interativa, utilizando JavaScript avançado.

A estrutura foi significativamente alterada: o projeto agora utiliza um único ficheiro index.html (como "concha") e todo o conteúdo das páginas é gerado e injetado dinamicamente via JavaScript, sem recarregar a página.

1. Sistema de Single Page Application (SPA) Básico

Foi implementado um sistema de "Router" (roteador) em JavaScript (assets/js/main.js).

Roteamento por Hash: O sistema "ouve" as mudanças no "hash" da URL (ex: .../index.html#projetos).

Carregamento Dinâmico: Ao detetar uma mudança, o router carrega o template HTML correspondente (ver ponto 2) e "injeta-o" no elemento <main id="app-root"> do index.html.

Navegação: Todos os links de navegação (<a href="...">) foram atualizados para usar o formato href="#nome-da-pagina" para interagir com o router.

Manipulação de Âncoras: O router também consegue lidar com âncoras internas (ex: .../#projetos-doar), carregando a página de projetos e rolando automaticamente para a secção id="doar".

2. Sistema de Templates JavaScript

Todo o conteúdo HTML das páginas (Início, Projetos, Cadastro) foi movido do HTML estático para dentro do ficheiro assets/js/main.js.

Objeto templates: Um objeto JavaScript (const templates = { ... }) armazena o HTML de cada página como template literals (strings  ).

Manipulação do DOM: A função loadTemplate é responsável por ler o template pedido e aplicar o seu innerHTML ao <main id="app-root">.

3. Funcionalidades Específicas (Validação Avançada)

O ficheiro assets/js/main.js foi atualizado para incluir um módulo de validação de formulário muito mais robusto, que é ativado apenas quando a templates.cadastro é carregada.

Verificação de Consistência de Dados (Requisito Obrigatório):

Senhas: O script verifica, em tempo real (ao digitar) e ao submeter, se os campos "Senha" e "Confirmar Senha" são idênticos. Se não forem, uma mensagem de erro específica é mostrada.

Idade: O script verifica se a "Data de Nascimento" inserida corresponde a uma idade de 18 anos ou mais. Se for menor, uma mensagem de erro específica é mostrada.

Feedback Visual Imediato: A validação agora acontece "ao vivo" (input event). O utilizador vê o feedback de erro (campos a vermelho e mensagens) assim que digita algo inválido.

Máscaras de Input (Mesmas da Parte 2): As máscaras de CPF, Telefone e CEP continuam a ser aplicadas dinamicamente.

Gestão de Erros: O formulário agora mostra uma mensagem de erro global (alert-danger) se a submissão falhar devido a campos inválidos, e uma mensagem de sucesso (alert-success) se tudo estiver correto.

4. Código JavaScript Modular

O assets/js/main.js foi reescrito e organizado logicamente em "módulos" (comentados) para facilitar a manutenção:

MÓDULO: TEMPLATES DE PÁGINA (O HTML das páginas)

MÓDULO: ROUTER (O "Cérebro" da SPA) (A lógica de navegação)

MÓDULO: LÓGICA DE UI (Menu, Modal) (O código do menu hambúrguer e modal da Parte 2)

MÓDULO: VALIDAÇÃO DE FORMULÁRIO (Avançado) (A nova lógica de validação)

MÓDULO: INICIALIZAÇÃO DA APP (O código que arranca tudo)


# 📋 Projeto Web: Site Solidário "Mãos que Ajudam" (Parte 4)

Este repositório documenta o desenvolvimento de um projeto web completo para uma organização sem fins lucrativos fictícia, "Mãos que Ajudam". O projeto foi construído em 4 partes, evoluindo de um site HTML estático para uma Single Page Application (SPA) dinâmica, responsiva e acessível.

**Link para o site online (GitHub Pages):** [https://vitorhenrique00.github.io/projeto-ong/parte-4/](https://vitorhenrique00.github.io/projeto-ong/parte-4/)

---

## Estrutura do Repositório

O projeto está organizado em pastas para cada fase de entrega, permitindo uma visualização clara da evolução do código:

* `/parte-1/`: **Estrutura HTML5 Semântica.** Contém os 3 ficheiros HTML puros (`index.html`, `projetos.html`, `cadastro.html`) com estrutura semântica (tags `<header>`, `<main>`, `<section>`, etc.) e um formulário complexo com validação nativa.
* `/parte-2/`: **CSS3, Design System e Responsividade.** Transforma o HTML da Parte 1 num site visualmente profissional. Implementa um Design System completo com Variáveis CSS, layouts responsivos (CSS Grid e Flexbox), 5+ breakpoints, e componentes de UI (cards, botões, tags, modals).
* `/parte-3/`: **JavaScript Avançado e SPA.** Converte o site numa Single Page Application (SPA) usando um "router" JavaScript. O conteúdo das páginas é agora gerado dinamicamente a partir de "templates" JS. Inclui validação de formulário avançada (consistência de senhas, verificação de idade) e máscaras de input.
* `/parte-4/`: **Acessibilidade (WCAG) e Otimização.** Implementa a funcionalidade de **Modo Escuro / Alto Contraste** (que salva a preferência do utilizador no `localStorage`), melhora a acessibilidade (WCAG 2.1 Nível AA) com navegação por teclado, e "simula" a otimização ao combinar todo o CSS num único ficheiro.

---

## Destaques Técnicos (Funcionalidades da Versão Final - Parte 4)

A versão final do projeto (`/parte-4/`) é uma SPA completa com as seguintes funcionalidades:

### 1. Single Page Application (SPA)
* **Router JS:** O site usa um único `index.html` como "concha". A navegação (via links `href="#..."`) é gerida por um router em `main.js` que injeta o conteúdo das páginas no `<main id="app-root">` sem recarregar a página.
* **Templates JS:** Todo o HTML das subpáginas (Início, Projetos, Cadastro) está armazenado como *template literals* dentro do `main.js`.

### 2. Acessibilidade (WCAG 2.1 Nível AA)
* **Modo Escuro / Alto Contraste:** Um botão no cabeçalho permite ao utilizador alternar entre o tema claro e um tema escuro (de alto contraste).
* **Preferência Salva:** A escolha do tema (claro/escuro) é salva no `localStorage` do navegador e é carregada automaticamente na próxima visita. O site também deteta a preferência do sistema operativo (`prefers-color-scheme`) na primeira visita.
* **Navegação por Teclado:** Todos os elementos interativos (links, botões, menu dropdown, formulários, modal, toggle de tema) são 100% acessíveis via teclado (tecla `Tab`).
* **Leitores de Tela:** O HTML foi melhorado com atributos `aria-` (como `role="main"`, `aria-label`, `aria-expanded`, `role="switch"`, `role="alert"`) e uma estrutura de títulos lógica para garantir a compatibilidade com leitores de tela.
* **Contraste:** As cores do Design System (tanto no modo claro como no escuro) foram escolhidas para garantir um rácio de contraste mínimo de 4.5:1, conforme exigido pela WCAG.

### 3. Validação de Formulário Avançada
O formulário de cadastro (`#cadastro`) inclui:
* **Verificação de Consistência:** Valida se as senhas coincidem e se o utilizador tem mais de 18 anos (requisito da Parte 3).
* **Máscaras de Input:** Aplica máscaras dinâmicas (CPF, Telefone, CEP) enquanto o utilizador digita.
* **Feedback Imediato:** Mostra mensagens de erro e sucesso (`:invalid`, `alert-danger`) em tempo real.

### 4. Design System e CSS Modular
* **CSS Otimizado:** Na `parte-4`, todo o CSS modular (Reset, Variáveis, Layout, Componentes, etc.) foi combinado num único ficheiro `style.css` para simular a "minificação" e otimizar o carregamento em produção.
* **Variáveis CSS:** Todo o Design System (cores, fontes, espaçamento) é controlado por Variáveis CSS (`:root`), o que permite a funcionalidade do Modo Escuro de forma eficiente.
* **Layout Responsivo:** O site é 100% responsivo (Mobile First), usando CSS Grid para a estrutura principal e Flexbox para os componentes.