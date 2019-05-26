import AppController from 'app/controller/app-controller';
import AppElementFactory from 'app/view/app-element-factory';
import PokedexSearchElementFactory from 'app/view/pokedex-search-element-factory';
import PokedexElementFactory from 'app/view/pokedex-element-factory';
import PokemonElementFactory from 'app/view/pokemon-element-factory';
import Pokedex from 'app/http/pokedex';
import PokemonFactory from 'app/http/pokemon-factory';

const pokemonElementFactory = new PokemonElementFactory(document);
const pokedexSearchElementFactory = new PokedexSearchElementFactory(document);
const pokedexElementFactory = new PokedexElementFactory(document, pokemonElementFactory);
const appElementFactory = new AppElementFactory(document, pokedexSearchElementFactory, pokedexElementFactory);

const pokemonFactory = new PokemonFactory();
const pokedex = new Pokedex(window, pokemonFactory);

const appController = new AppController(appElementFactory, pokedex);

appController.index(document);
