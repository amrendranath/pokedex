import PokemonStore from "./pokemonStore";

class Store {
    constructor() {
        this.PokemonStore = new PokemonStore(this);
    }
}

const rootStore = new Store();

export default rootStore;