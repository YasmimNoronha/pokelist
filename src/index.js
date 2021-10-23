async function index() {
  async function getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
    const responseJson = await response.json();
    const pokemons = responseJson.results;
    return pokemons; 
  }

  const pokemons = await getPokemons();

  const list = document.getElementById("list");

  pokemons.forEach(pokemon => {
    const element = document.createElement("li");
    element.innerText = pokemon.name;
    list.appendChild(element);
  });
}

index();