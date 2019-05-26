import Pokemon from 'app/model/pokemon';
import PokemonElementFactory from './pokemon-element-factory';
import PokedexElement from './pokedex-element';

export default class PokedexElementFactory {
    /**
     * @param {Document} document
     * @param {PokemonElementFactory} pokemonElementFactory
     */
    constructor(document, pokemonElementFactory) {
        this.document = document;
        this.pokemonElementFactory = pokemonElementFactory;
    }

    /**
     * @param {Pokemon} pokemons
     * @returns {PokedexElement}
     */
    create(pokemons) {
        const pokemonElements = [];
        const pokedexElement = this.document.createElement('ul');

        for (const pokemon of pokemons) {
            const pokemonElement = this.pokemonElementFactory.create(pokemon);

            pokemonElements.push(pokemonElement);
            pokedexElement.appendChild(pokemonElement.getContainer());
        }

        return new PokedexElement(pokedexElement, pokemonElements);
    }
}
