// app.js — Portal de Livros (imagens soltas na mesma pasta)

const db = {
  // Destaques (carrossel)
  destaques: [
    { targetId: "sel-1", titulo: "A Seleção", descricao: "Romance real em um mundo de castas — intrigas, escolhas e amor.", imagem: "livroaselecao.png" },
    { targetId: "sus-1", titulo: "Verity", descricao: "Suspense psicológico intenso, segredos e manipulação.", imagem: "livrosuspense1.png" },
    { targetId: "men-1", titulo: "Os Mentirosos", descricao: "Família poderosa, ilha e uma verdade que muda tudo.", imagem: "livrosuspense2.png" },
    { targetId: "rom-1", titulo: "É Assim que Acaba", descricao: "Coragem para romper ciclos e recomeçar.", imagem: "livroromance1.png" },
    { targetId: "cul-2", titulo: "Sua Culpa", descricao: "Continuação intensa — sentimentos, decisões e amadurecimento.", imagem: "livrosuaculpa.png" }
  ],

  // Livros (cards + detalhes)
  livros: [
    {
      id: "rom-1",
      titulo: "É Assim que Acaba",
      autor: "Colleen Hoover",
      imagem: "livroromance1.png", // CAPA
      genero: "Romance Contemporâneo",
      nota: 4.8,
      descricao:
        "Lily Bloom tenta construir um futuro quando conhece Ryle Kincaid. Memórias de Atlas — seu primeiro amor — retornam, confrontando-a com padrões de abuso e escolhas difíceis. Uma história forte sobre autonomia, cura e recomeços. Um dos maiores sucessos de Colleen Hoover virou até filme.",
      detalhes: { editora: "Galera Record", ano: 2018, paginas: 384, conteudoSensivel: "Abuso doméstico" },
      fotos: [
        { titulo: "Cena inspiradora", imagem: "cenainspiradora.png" },
        { titulo: "Citação marcante", imagem: "citacaomarcante.png" } // nome certo, sem acento/sem espaço
      ]
    },
    {
      id: "rom-2",
      titulo: "Novembro, 9",
      autor: "Colleen Hoover",
      imagem: "livroromance2.png", // CAPA correta (não usa novembro9.png como capa)
      genero: "Romance",
      nota: 4.6,
      descricao:
        "Fallon e Ben se conhecem em 9 de novembro e combinam se ver anualmente. Entre ficção e realidade, segredos do passado emergem e ameaçam um amor que parecia inevitável.",
      detalhes: { editora: "Galera Record", ano: 2017, paginas: 336 },
      fotos: [
        { titulo: "Capa/arte do encontro", imagem: "novembro9.png" },
        { titulo: "Primeiro encontro", imagem: "primeiroencontro.png" }
      ]
    },
    {
      id: "cul-1",
      titulo: "Minha Culpa",
      autor: "Mercedes Ron",
      imagem: "capafilme.png", // CAPA correta (não usa capa de Novembro, 9)
      genero: "Ficção, Romance Contemporâneo",
      nota: 4.4,
      descricao:
        "Ao mudar-se com a mãe para a casa do novo padrasto, Noah conhece Nick — seu meio-irmão rebelde. Entre provocações e química, ela encara dilemas morais e emocionais. Romance intenso sobre descobertas e limites. Um dos maiores acertos foi transformar toda a coleção de Minha Culpa em filme, tornando-os um grande sucesso.",
      detalhes: { editora: "Universo dos Livros", ano: 2023, paginas: 384 },
      fotos: [
        { titulo: "Noah & Nick", imagem: "noahenick.png" },
        { titulo: "Poster/arte do filme", imagem: "capafilme.png" }
      ]
    },
    {
      id: "cul-2",
      titulo: "Sua Culpa",
      autor: "Mercedes Ron",
      imagem: "livrosuaculpa.png", // CAPA
      genero: "Romance Contemporâneo, Drama",
      nota: 4.3,
      descricao:
        "Continuação de ‘Minha Culpa’. Noah e Nick tentam seguir caminhos separados, mas a conexão entre eles insiste em voltar à tona. Entre reencontros e novos desafios, o amadurecimento fala mais alto.",
      detalhes: { editora: "Universo dos Livros", ano: 2024, paginas: 400 },
      fotos: [
        { titulo: "Reencontro", imagem: "reecontro.png" }, // conforme seu arquivo
        { titulo: "Momentos intensos", imagem: "intenso.png" }
      ]
    },
    {
      id: "sel-1",
      titulo: "A Seleção",
      autor: "Kiera Cass",
      imagem: "livroaselecao.png", // CAPA correta
      genero: "Romance Distópico, Jovem Adulto",
      nota: 4.7,
      descricao:
        "Em uma sociedade dividida por castas, 35 garotas disputam o coração do príncipe Maxon. America Singer não deseja a coroa, mas descobrirá que o palácio pode mudar seu destino — e o do país.",
      detalhes: { editora: "Seguinte", ano: 2012, paginas: 368 },
      fotos: [
        { titulo: "Baile no palácio", imagem: "bailenopalacio.png" },
        { titulo: "As candidatas", imagem: "candidatas.png" }
      ]
    },
    {
      id: "sus-1",
      titulo: "Verity",
      autor: "Colleen Hoover",
      imagem: "livrosuspense1.png", // CAPA
      genero: "Suspense Psicológico",
      nota: 4.7,
      descricao:
        "Lowen é contratada para continuar a série de Verity Crawford. Isolada na casa da autora, encontra um manuscrito perturbador que revela segredos sombrios — e precisa decidir em quem pode confiar.",
      detalhes: { editora: "Galera Record", ano: 2021, paginas: 320 },
      fotos: [
        { titulo: "Casa dos Crawford", imagem: "casacrawford.png" },
        { titulo: "Manuscrito", imagem: "manuscrito.png" }
      ]
    },
    {
      id: "men-1",
      titulo: "Os Mentirosos",
      autor: "E. Lockhart",
      imagem: "livrosuspense2.png", // CAPA
      genero: "Mistério",
      nota: 4.5,
      descricao:
        "Cadence Sinclair passa os verões em uma ilha com a família. Após um acidente, perde parte da memória. Reconstruir aquele verão revelará verdades dolorosas.",
      detalhes: { editora: "Seguinte", ano: 2014, paginas: 272 },
      fotos: [
        { titulo: "Ilha da família", imagem: "ilhadafamilia.png" },
        { titulo: "Os quatro mentirosos", imagem: "osmentirosos.png" } // sem espaço
      ]
    }
  ]
};

// ======== Helpers ========
const $ = (sel) => document.querySelector(sel);
function stars(nota) {
  const full = Math.round(nota);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

// ======== Carrossel ========
function renderCarousel() {
  const root = document.getElementById("carousel");
  if (!root) return;
  root.innerHTML = "";
  db.destaques.forEach((d, i) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${i === 0 ? "active" : ""}`;
    item.innerHTML = `
      <img src="${d.imagem}" class="d-block w-100" alt="${d.titulo}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${d.titulo}</h5>
        <p>${d.descricao}</p>
        <a href="detalhes.html?id=${encodeURIComponent(d.targetId)}" class="btn btn-outline-light btn-sm">Ver detalhes</a>
      </div>`;
    root.appendChild(item);
  });
}

// ======== Cards ========
function renderCards() {
  const grid = document.getElementById("livros");
  if (!grid) return;
  grid.innerHTML = "";
  db.livros.forEach((livro) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${livro.imagem}" class="card-img-top" alt="${livro.titulo}">
        <div class="card-body">
          <h5 class="card-title">${livro.titulo}</h5>
          <p class="text-muted mb-1">${livro.autor} • ${livro.genero}</p>
          <p class="mb-1"><span class="badge bg-warning text-dark">${stars(livro.nota)} (${livro.nota.toFixed(1)})</span></p>
          <p class="card-text mt-2">${livro.descricao}</p>
          <a href="detalhes.html?id=${encodeURIComponent(livro.id)}" class="btn btn-outline-primary mt-2">Ver detalhes</a>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

// ======== Detalhes ========
function renderDetalhes() {
  const root = document.getElementById("detalheRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const livro = db.livros.find((l) => l.id === id);
  if (!livro) {
    root.innerHTML = `<div class="alert alert-danger">Livro não encontrado.</div>`;
    return;
  }

  root.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-12 col-md-5 text-center">
        <img src="${livro.imagem}" alt="${livro.titulo}" class="img-fluid rounded shadow-sm">
      </div>
      <div class="col-12 col-md-7">
        <h2 class="text-pink mb-2">${livro.titulo}</h2>
        <p class="mb-1"><strong>Autora:</strong> ${livro.autor}</p>
        <p class="mb-1"><strong>Gênero:</strong> ${livro.genero}</p>
        <p class="mb-1"><strong>Avaliação:</strong> <span class="badge bg-warning text-dark">${stars(livro.nota)} (${livro.nota.toFixed(1)})</span></p>
        ${livro.detalhes ? `
          <p class="mb-1"><strong>Editora:</strong> ${livro.detalhes.editora || "—"}</p>
          <p class="mb-1"><strong>Ano:</strong> ${livro.detalhes.ano || "—"}</p>
          <p class="mb-1"><strong>Páginas:</strong> ${livro.detalhes.paginas || "—"}</p>
          ${livro.detalhes.conteudoSensivel ? `<p class="mb-1"><strong>Conteúdo sensível:</strong> ${livro.detalhes.conteudoSensivel}</p>` : "" }
        ` : "" }
        <hr class="my-3">
        <p>${livro.descricao}</p>
        <a href="index.html" class="btn btn-outline-secondary mt-2">⬅ Voltar</a>
      </div>
    </div>

    <div class="bg-light p-4 rounded shadow-sm mt-4">
      <h3 class="text-center text-pink mb-3">📸 Fotos relacionadas</h3>
      <div class="row row-cols-1 row-cols-md-3 g-4" id="fotosGrid"></div>
    </div>
  `;

  const fotosGrid = document.getElementById("fotosGrid");
  fotosGrid.innerHTML = "";
  (livro.fotos || []).forEach(f => {
    const c = document.createElement("div");
    c.className = "col";
    c.innerHTML = `
      <div class="card h-100">
        <img src="${f.imagem}" class="card-img-top" alt="${f.titulo}">
        <div class="card-body text-center">
          <p class="card-text">${f.titulo}</p>
        </div>
      </div>`;
    fotosGrid.appendChild(c);
  });
}

// ======== Init ========
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("carousel")) renderCarousel();
  if (document.getElementById("livros")) renderCards();
  if (document.getElementById("detalheRoot")) renderDetalhes();
});
