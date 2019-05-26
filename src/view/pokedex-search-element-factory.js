import PokedexElement from './pokedex-element';

export default class PokedexSearchElementFactory {
    /**
     * @param {Document} document
     */
    constructor(document) {
        this.document = document;
    }

    /**
     * @param {PokedexElement} pokedexElement
     * @returns {HTMLElement}
     */
    create(pokedexElement) {
        const container = this.createContainer();

        container.appendChild(this.createInput(pokedexElement));

        return container;
    }

    /**
     * @private
     * @returns {HTMLElement}
     */
    createContainer() {
        const container = this.document.createElement('section');

        container.classList.add('pokedex-search');

        return container;
    }

    /**
     * @private
     * @param {PokedexElement} pokedexElement
     * @returns {HTMLInputElement}
     */
    createInput(pokedexElement) {
        const input = this.document.createElement('input');
        const filter = () => {
            pokedexElement.filter(input.value);
        };

        input.placeholder = 'Enter pokemon name...';
        input.addEventListener('change', filter);
        input.addEventListener('keyup', filter);

        return input;
    }
}
