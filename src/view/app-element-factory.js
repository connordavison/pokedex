import PokedexSearchElementFactory from './pokedex-search-element-factory';
import PokedexElementFactory from './pokedex-element-factory';
import Pokemon from 'app/model/pokemon';

export default class AppElementFactory {
    /**
     * @param {Document} document
     * @param {PokedexSearchElementFactory} pokedexSearchElementFactory
     * @param {PokedexElementFactory} pokedexElementFactory
     */
    constructor(document, pokedexSearchElementFactory, pokedexElementFactory) {
        this.document = document;
        this.pokedexSearchElementFactory = pokedexSearchElementFactory;
        this.pokedexElementFactory = pokedexElementFactory;
    }

    /**
     * @param {Pokemon[]} pokemons
     * @returns {HTMLElement}
     */
    create(pokemons) {
        const pokedexElement = this.pokedexElementFactory.create(pokemons);
        const pokedexSearchElement = this.pokedexSearchElementFactory.create(pokedexElement);
        const app = this.document.createElement('div');

        app.appendChild(pokedexSearchElement);
        app.appendChild(pokedexElement.getContainer());

        return app;
    }
}
