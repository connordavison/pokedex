import Pokemon from 'app/model/pokemon';
import PokemonFactory from 'app/http/pokemon-factory';

export default class Pokedex {
    /**
     * @param {GlobalFetch} fetcher
     * @param {PokemonFactory} pokemonFactory
     */
    constructor(fetcher, pokemonFactory) {
        this.fetcher = fetcher;
        this.pokemonFactory = pokemonFactory;
    }

    /**
     * @returns {Promise<Pokemon[]>}
     */
    async getAll() {
        const response = await this.fetcher.fetch(
            'https://pokeapi.co/api/v2/pokemon/?limit=151'
        );
        const contents = await response.json();

        return this.pokemonFactory.createFromResultSet(contents.results);
    }
}
