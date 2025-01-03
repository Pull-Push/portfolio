let savedPokemon = null;
let pokeObject = {
    'id':'',
    'name': "",
    'height':'',
    'weight':'',
    'sprite':'',
    'types':[]

}

const getPokemon = async () => {
    try {
        const rando = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${rando}`);
        if (response.ok) {
            return await response.json(); // Return the Pokémon data
        } else {
            console.log(`Failed to fetch Pokémon: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};

getPokemon().then((pokemon) => {
    savedPokemon = pokemon;
    console.log('Saved Pokémon:', savedPokemon);
    pokeObject.id = pokemon.id;
    pokeObject.name = pokemon.name;
    pokeObject.height = pokemon.height;
    pokeObject.weight = pokemon.weight;
    pokeObject.sprite = pokemon.sprites.front_default;
    pokeObject.types = pokemon.types;
    // Any logic dependent on savedPokemon goes here
});

// Outside code must wait or be inside the .then()
setTimeout(() => {
    console.log('Accessing savedPokemonObject later:', pokeObject);
    console.log(`pokemon type 1`, pokeObject.types[0].type.name)
    console.log(`pokemon type 2`, pokeObject.types[1].type.name)

}, 1000); // Wait to ensure the Promise resolves