const API_BASE = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const root = document.getElementById("detalheRoot");

  if (!id) {
    root.innerHTML = `<div class="alert alert-danger">Livro não informado.</div>`;
    return;
  }

  carregarLivro(id);
});

async function carregarLivro(id) {
  try {
    const resp = await fetch(`${API_BASE}/livros/${id}`);
    if (!resp.ok) {
      document.getElementById("detalheRoot").innerHTML = `<div class="alert alert-danger">Livro não encontrado.</div>`;
      return;
    }
    const livro = await resp.json();
    renderDetalhes(livro);
  } catch (err) {
    document.getElementById("detalheRoot").innerHTML = `<div class="alert alert-danger">Erro ao carregar o livro.</div>`;
  }
}

function renderDetalhes(livro) {
  const root = document.getElementById("detalheRoot");

  root.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-12 col-md-5 text-center">
        <img src="${livro.imagem}" alt="${livro.titulo}" class="img-fluid rounded shadow-sm">
      </div>
      <div class="col-12 col-md-7">
        <h2 class="text-pink mb-2">${livro.titulo}</h2>
        <p class="mb-1"><strong>Autora:</strong> ${livro.autor}</p>
        <p class="mb-1"><strong>Gênero:</strong> ${livro.genero}</p>
        <p class="mb-1"><strong>Avaliação:</strong> <span class="badge bg-warning text-dark">${stars(livro.nota)} (${Number(livro.nota).toFixed(1)})</span></p>
        ${livro.detalhes ? `
          <p class="mb-1"><strong>Editora:</strong> ${livro.detalhes.editora || "—"}</p>
          <p class="mb-1"><strong>Ano:</strong> ${livro.detalhes.ano || "—"}</p>
          <p class="mb-1"><strong>Páginas:</strong> ${livro.detalhes.paginas || "—"}</p>
          ${livro.detalhes.conteudoSensivel ? `<p class="mb-1"><strong>Conteúdo sensível:</strong> ${livro.detalhes.conteudoSensivel}</p>` : ""}
        ` : ""}
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
  (livro.fotos || []).forEach((f) => {
    const c = document.createElement("div");
    c.className = "col";
    c.innerHTML = `
      <div class="card h-100">
        <img src="${f.imagem}" class="card-img-top" alt="${f.titulo}">
        <div class="card-body text-center">
          <p class="card-text">${f.titulo}</p>
        </div>
      </div>
    `;
    fotosGrid.appendChild(c);
  });
}

function stars(nota) {
  const full = Math.round(nota);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
