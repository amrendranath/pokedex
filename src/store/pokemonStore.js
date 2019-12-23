import { observable, action, computed } from "mobx";

class PokemonStore {
    @observable offset = 0;
    @observable pokemons = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }


}

export default PokemonStore;