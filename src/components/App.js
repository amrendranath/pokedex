import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class App extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.pokemonStore);
        this.props.pokemonStore.loadPokemons();
    }

    render() {
        console.log(this.props.pokemonStore.pokemons);
        return (
            <div> hgchgc </div>
        );
    }
}

export default inject("pokemonStore")(observer(App));