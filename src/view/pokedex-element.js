import PokemonElement from './pokemon-element';

export default class PokedexElement {
    /**
     * @param {HTMLElement} container
     * @param {PokemonElement[]} pokemonElements
     */
    constructor(container, pokemonElements) {
        this.container = container;
        this.pokemonElements = pokemonElements;
    }

    /**
     * @returns {HTMLElement}
     */
    getContainer() {
        return this.container;
    }

    /**
     * @param {string} query
     */
    filter(query) {
        for (const pokemonElement of this.pokemonElements) {
            if (pokemonElement.matches(query)) {
                pokemonElement.show();
            } else {
                pokemonElement.hide();
            }
        }
    }
}
