import { observable, decorate, runInAction } from "mobx";

class PokemonStore {
    pokemons = {};

    loadPokemons = (limit) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            runInAction(() => {
                this.pokemons = data;
            });
        });
    }
}

decorate(PokemonStore, {
    pokemons: observable
})

const pokemonStore = new PokemonStore();

export default pokemonStore;