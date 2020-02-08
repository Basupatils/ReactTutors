import React, { Component } from 'react';
//import PokemonLists from './PokemonLists';
import PokemonLists from './PokemonLists';

class App extends Component {

    constructor() {
        super();
        this.state = {
            type: 'initial state',
            PokemonList: []
        }
    }

    OnSelectTypeChange(event) {
        this.setState({ type: event.target.value })
        //console.log(event.target.value);
    }

    OnButtonClick(event) {
        event.preventDefault();
        console.log("button has been clicked  " + this.state.type);
        const API_URL = 'https://pokeapi.co/api/v2/type/' + this.state.type;
        fetch(API_URL)
            .then(result => {
                return result.json()
            }).then(data => {
                this.setState({ PokemonList: data.pokemon });
            }).catch(error => console.log(error) )

    }
    render() {
        console.log("current app state", this.state);
        return(
            <div>

                <div>
                    <h4>Small pokeman app </h4>
                    <form>
                        <label>Choose your pokeman type </label><br/>
                        <select onChange={this.OnSelectTypeChange.bind(this)}>
                            <option value="1">normal </option>
                            <option value="2">fighting </option>
                            <option value="3"> flying</option>
                            <option value="4"> Poison</option>

                        </select>
                        <button onClick={this.OnButtonClick.bind(this)} className="btn btn-success">Search </button>

                    </form>
                </div>
                <PokemonLists pokemon={this.state.PokemonList} />
                </div>
            );
    }
}

export default App;