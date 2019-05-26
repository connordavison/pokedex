import Pokemon from 'app/model/pokemon';

/**
 * @typedef PokemonSearchResult
 * @property {string} name
 * @property {string} url
 */
export default class PokemonFactory {
    /**
     * @param {PokemonSearchResult[]} results
     * @returns {Pokemon[]}
     */
    createFromResultSet(results) {
        const pokemons = [];

        for (const result of results) {
            pokemons.push(this.createFromResult(result));
        }

        return pokemons;
    }

    /**
     * @param {PokemonSearchResult} result
     * @returns {Pokemon}
     */
    createFromResult(result) {
        const url = result.url;
        const id = this.getId(url);

        return new Pokemon(result.name, this.getImageUrl(id), url);
    }

    /**
     * @private
     */
    getId(resourceUrl) {
        return resourceUrl.split('/').filter(val => Boolean(val)).pop();
    }

    /**
     * @private
     */
    getImageUrl(id) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
}
