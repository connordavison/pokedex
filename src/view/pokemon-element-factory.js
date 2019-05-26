import Pokemon from 'app/model/pokemon';
import PokemonElement from './pokemon-element';

export default class PokemonElementFactory {
    /**
     * @param {Document} document
     */
    constructor(document) {
        this.document = document;
    }

    /**
     * @param {Pokemon} pokemon
     * @returns {PokemonElement}
     */
    create(pokemon) {
        const container = this.document.createElement('li');

        container.classList.add('pokemon');
        container.appendChild(
            this.createImage(pokemon.getImageUrl())
        );
        container.appendChild(
            this.createName(pokemon.getName())
        );

        return new PokemonElement(container, pokemon);
    }

    /**
     * @private
     * @param {string} imageUrl
     */
    createImage(imageUrl) {
        const imageElement = new Image(96, 96);

        imageElement.classList.add('pokemon__image');
        imageElement.src = imageUrl;

        return imageElement;
    }

    /**
     * @private
     * @param {string} name
     */
    createName(name) {
        const nameElement = this.document.createElement('h2');

        nameElement.classList.add('pokemon__name');
        nameElement.innerText = name;

        return nameElement;
    }
}
