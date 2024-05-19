var temas = [
  ["Apocalipse", "apocalypse"],
  ["Cyberpunk", "cyberpunk"],
  ["Dieselpunk", "dieselpunk"],
  ["Fábula", "fables"],
  ["Fantasia", "fantasy"],
  ["Flora Extraterrestre", "alien flora"],
  ["Gótico", "gothic"],
  ["Guerra", "war"],
  ["Horror", "horror"],
  ["Medieval", "medieval"],
  ["Mitologia", "mythology"],
  ["Oriental", "oriental"],
  ["Pirata", "pirate"],
  ["Sci-fi Espacial", "scifi"],
  ["Steampunk", "steampunk"],
  ["Surreal", "surrealism"],
];

function novoTema() {
  var randomNumber = Math.floor(Math.random() * temas.length);
  document.getElementById("temaDisplay").innerHTML = `
        <p>
          <strong>${temas[randomNumber][0]}</strong><br>
          <small><a href="https://br.pinterest.com/search/pins/?q=${temas[randomNumber][1]} art" target="_blank">exemplos</a></small>
        </p>
        `;
}
