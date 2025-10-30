/* app.js - SPA simples + sistema de templates
   - roteamento via hash (#/)
   - templates como strings (baseados nos seus arquivos)
   - manipulação do formulário de cadastro (salva em localStorage)
*/

(() => {
  // helpers
  const $ = sel => document.querySelector(sel);
  const setActiveNav = (route) => {
    document.querySelectorAll('.nav-link').forEach(a => {
      if (a.dataset.route === route) {
        a.classList.add('ativo');
      } else {
        a.classList.remove('ativo');
      }
    });
  };

  // ---------- TEMPLATES ----------
  // Baseei os textos e seções no seu index.html, projetos.html e cadastro.html.
  // Início / Quem Somos / Missão -> index.html. :contentReference[oaicite:5]{index=5}
  // Projetos -> projetos.html. :contentReference[oaicite:6]{index=6}
  // Cadastro (form) -> cadastro.html. :contentReference[oaicite:7]{index=7}

  const templates = {
    '/': `
      <section id="home" class="center" style="width:100%">
        <h1>Vida+</h1>
        <section id="quem-somos" class="container center">
          <h2>Quem Somos</h2>
          <p>A <strong>Vida+</strong> é uma organização dedicada a promover o bem-estar e a solidariedade através de projetos sociais que transformam vidas. Acreditamos que pequenas ações podem gerar grandes mudanças.</p>
          <img src="ASSETS/quem somos.jpeg" alt="Equipe da Vida+ reunida">
          <button onclick="location.hash='#/projetos'">Saiba mais</button>
        </section>

        <section id="missao" class="container center">
          <h2>Nossa Missão</h2>
          <p>Salvar vidas promovendo a cultura da doação voluntária de sangue, por meio da conscientização, mobilização social e apoio aos hemocentros, garantindo que mais pessoas tenham acesso seguro e oportuno ao sangue que necessitam.</p>
          <img src="ASSETS/doacao.jpeg" alt="Ações solidárias em campo">
          <button onclick="location.hash='#/projetos'">Ver projetos</button>
        </section>

        <section id="visao-valores" class="container center">
          <h2>Visão e Valores</h2>
          <p>Ser referência nacional em ações de incentivo à doação de sangue. Valores: Solidariedade, Transparência, Compromisso com a vida, Educação e Inclusão.</p>
          <img src="ASSETS/valores.webp" alt="Trabalho em equipe promovendo solidariedade">
          <button onclick="location.hash='#/cadastro'">Junte-se a nós</button>
        </section>
      </section>
    `,

    '/projetos': `
      <section class="caixabranca">
        <h1>Projeto em destaque</h1>
        <h2>Programa “Amigo Doador”</h2>
        <p>Incentivar que cada voluntário leve um amigo ou familiar para doar junto.
        Criar certificados simbólicos ou selos digitais de reconhecimento.</p>
        <img src="ASSETS/amigo doador.jpeg" alt="Programa “Amigo Doador”">

        <h2>Projeto universitário “Salve Vidas”</h2>
        <p>Criar grupos de extensão acadêmica que promovam palestras, debates e transporte de estudantes até bancos de sangue. Além de doar, os alunos podem produzir conteúdo científico e educativo sobre o tema.</p>
        <img src="ASSETS/Projeto universitário.jpeg" alt="Projeto universitário “Salve Vidas”">
      </section>
    `,

    '/cadastro': `
      <section class="caixabranca">
        <h1>Seja um doador de sangue</h1>
        <form id="cadastroForm">
          <fieldset>
            <legend>Informações Pessoais</legend>

            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" maxlength="14" required>

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>

            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="date" id="dataNascimento" name="dataNascimento" required>

            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="\\d{5}-\\d{3}" required>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required>

            <label for="estado">Estado:</label>
            <input type="text" id="estado" name="estado" maxlength="2" placeholder="UF" required>

            <button type="submit">Enviar Cadastro</button>
          </fieldset>
        </form>

        <div id="cadastro-msg" aria-live="polite" style="margin-top:12px"></div>
      </section>
    `
  };

  // ---------- RENDER ----------
  const root = $('#app-root');

  function render(route) {
    const tpl = templates[route] || templates['/'];
    root.innerHTML = tpl;
    setActiveNav(route);

    // after render hooks
    if (route === '/cadastro') {
      const form = document.getElementById('cadastroForm');
      const msg = document.getElementById('cadastro-msg');
      if (form) {
        form.addEventListener('submit', (ev) => {
          ev.preventDefault();
          const data = Object.fromEntries(new FormData(form).entries());
          // simple validation example
          if (!data.nome || !data.email) {
            msg.textContent = 'Preencha nome e e-mail.';
            return;
          }
          // salva em localStorage (simples)
          const registros = JSON.parse(localStorage.getItem('vidamais_registros') || '[]');
          registros.push({...data, createdAt: new Date().toISOString()});
          localStorage.setItem('vidamais_registros', JSON.stringify(registros));
          msg.textContent = 'Obrigado! Seu cadastro foi recebido (armazenado localmente).';
          form.reset();
        });
      }
    }
  }

  // ---------- ROUTER ----------
  function parseLocation() {
    // hash como "#/projetos" ou "#/"
    const hash = location.hash.replace(/^#/, '') || '/';
    // keep only first part (ignore params for now)
    const path = hash.split('?')[0];
    return path;
  }

  function router() {
    const path = parseLocation();
    // normalize trailing slash
    const route = path === '' ? '/' : path;
    render(route);
  }

  // intercept clicks on links with data-link (progressive enhancement)
  window.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-link]');
    if (a) {
      // allow normal behavior if external
      const href = a.getAttribute('href') || '#/';
      // let hash change drive rendering
      // (we do nothing more - hash will change and trigger router)
    }
  });

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);

  // initial render (in case user loads index.html directly without hash)
  document.addEventListener('DOMContentLoaded', () => {
    // if no hash, set to home (keeps URL stable)
    if (!location.hash) {
      location.hash = '#/';
    } else {
      router();
    }
  });

})();
