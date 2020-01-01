import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class App extends Component {
    constructor (props) {
        super(props);

    }

    componentDidMount() {
        this.props.pokemonStore.loadPokemons();
    }

    render() {
        console.log(this.props.pokemonStore);
        return (
            <div className="App">
                <h1 className="heading"> Pokedex </h1>
            </div>
        );
    }
}

export default inject("pokemonStore")(observer(App));