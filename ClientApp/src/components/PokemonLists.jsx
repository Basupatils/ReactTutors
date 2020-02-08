import React, { Component } from 'react';

class PokemonLists extends Component
{
    rendorPkemon() {
        return this.props.pokemon.map(pokemons =>
        {
            console.log(pokemons);
            return <li className="card">Name :{pokemons.pokemon.name} , {pokemons.pokemon.url}</li>
        })
    }

    render()
    {
        // console.log("PokemonList", this.props);
        if (this.props.pokemon.length > 0) {
            return (<ul>
                {this.rendorPkemon()}
                    </ul>)
        }
        else {
            return (<div>List is empty </div>)
        }
    }
}

export default PokemonLists;