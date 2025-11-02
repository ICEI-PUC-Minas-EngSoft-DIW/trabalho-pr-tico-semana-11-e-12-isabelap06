const API_BASE = "http://localhost:3000";

// helper
const $ = (sel) => document.querySelector(sel);

function stars(nota) {
  const full = Math.round(nota);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([carregarDestaques(), carregarLivros()]);
});

async function carregarDestaques() {
  try {
    const resp = await fetch(`${API_BASE}/destaques`);
    const destaques = await resp.json();
    renderCarousel(destaques);
  } catch (err) {
    console.error("Erro ao carregar destaques:", err);
  }
}

function renderCarousel(destaques) {
  const root = document.getElementById("carousel");
  if (!root) return;
  root.innerHTML = "";

  destaques.forEach((d, i) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${i === 0 ? "active" : ""}`;
    item.innerHTML = `
      <img src="${d.imagem}" class="d-block w-100" alt="${d.titulo}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${d.titulo}</h5>
        <p>${d.descricao}</p>
        <a href="detalhes.html?id=${encodeURIComponent(d.targetId)}" class="btn btn-outline-light btn-sm">Ver detalhes</a>
      </div>
    `;
    root.appendChild(item);
  });
}

async function carregarLivros() {
  try {
    const resp = await fetch(`${API_BASE}/livros`);
    const livros = await resp.json();
    renderCards(livros);
  } catch (err) {
    console.error("Erro ao carregar livros:", err);
  }
}

function renderCards(livros) {
  const grid = document.getElementById("livros");
  if (!grid) return;
  grid.innerHTML = "";

  livros.forEach((livro) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${livro.imagem}" class="card-img-top" alt="${livro.titulo}">
        <div class="card-body">
          <h5 class="card-title">${livro.titulo}</h5>
          <p class="text-muted mb-1">${livro.autor} • ${livro.genero}</p>
          <p class="mb-1"><span class="badge bg-warning text-dark">${stars(livro.nota)} (${Number(livro.nota).toFixed(1)})</span></p>
          <p class="card-text mt-2">${livro.descricao}</p>
          <a href="detalhes.html?id=${encodeURIComponent(livro.id)}" class="btn btn-outline-primary mt-2">Ver detalhes</a>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}
