const filmes = [
  {
    titulo: "A Origem",
    generos: ["Ação", "Ficção", "Suspensa"],
    ano: 2010,
  },
  {
    titulo: "O Senhor dos Anéis: A sociedade do Anel",
    generos: ["Ação", "Aventura", "Fantasia"],
    ano: 2001,
  },
  {
    titulo: "Interestelar",
    generos: ["Ação", "Aventura", "Ficção"],
    ano: 2014,
  },
  {
    titulo: "Gato de Botas 2: O Último Pedido",
    generos: ["Comédia", "Aventura", "Animação", "Fantasia"],
    ano: 2022,
  },
  {
    titulo: "O Tigre e a Neve",
    generos: ["Romance", "Comédia", "Drama"],
    ano: 2005,
  },
];

function filmesPorGenero(genero) {
  // Implemente o código aqui
  const procurarPorGenero = filmes.filter((movie) =>
    movie.generos.includes(genero)
  );
  return procurarPorGenero;
}
console.log("\nTodos os Filmes por Genero");
console.log(filmesPorGenero("Ação"));
console.log(filmesPorGenero("Comédia")); // Deve retornar []
