import AppElementFactory from 'app/view/app-element-factory';
import Pokedex from 'app/http/pokedex';

export default class AppController {
    /**
     * @param {AppElementFactory} appElementFactory
     * @param {Pokedex} pokedex
     */
    constructor(appElementFactory, pokedex) {
        this.appElementFactory = appElementFactory;
        this.pokedex = pokedex;
    }

    /**
     * @param {Document} document
     */
    async index(document) {
        const appElement = this.appElementFactory.create(
            await this.pokedex.getAll()
        );

        const attach = () => document.body.appendChild(appElement);

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', attach);
        } else {
            attach();
        }
    }
}
