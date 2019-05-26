import Pokemon from 'app/model/pokemon';

export default class PokemonElement {
    /**
     * @param {HTMLElement} container
     * @param {Pokemon} pokemon
     */
    constructor(container, pokemon) {
        this.container = container;
        this.pokemon = pokemon;
    }

    /**
     * @returns {HTMLElement}
     */
    getContainer() {
        return this.container;
    }

    /**
     * @returns {Pokemon}
     */
    getPokemon() {
        return this.pokemon;
    }

    /**
     * @param {string} query
     * @returns {boolean}
     */
    matches(query) {
        return this.pokemon.getName().includes(query);
    }

    hide() {
        this.container.classList.add('pokemon--hidden');
    }

    show() {
        this.container.classList.remove('pokemon--hidden');
    }
}
