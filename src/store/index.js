import { observable, decorate, runInAction, computed } from "mobx";

class PokemonStore {
    numberOfPokemon = 10;
    pokemonsData = []; // for storing fetched data
    filterValue = "";
    filteredPokemons = [];

    loadPokemons = () => {
        const promises = [];
        for (let pokemon = 1; pokemon <= this.numberOfPokemon; pokemon++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            promises.push(fetch(url).then(res => res.json()));
        }

        Promise.all(promises).then((results) => {
            const pokemons = results.map((result) => {
                return {
                    abilities: result.abilities,
                    id: result.id,
                    name: result.name,
                    sprites: result.sprites,
                    stats: result.stats,
                    types: result.types
                };
            });
            runInAction(() => {
                this.filteredPokemons = pokemons;
                this.pokemonsData = results;
            });
        });
    }
}

decorate(PokemonStore, {
    filteredPokemons: observable.ref,
    filterValue: observable,
    numberOfPokemon: observable
});

const pokemonStore = new PokemonStore();

export default pokemonStore;