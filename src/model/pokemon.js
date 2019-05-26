export default class Pokemon {
    /**
     * @param {string} name
     * @param {string} imageUrl
     * @param {string} resourceUrl
     */
    constructor(name, imageUrl, resourceUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.resourceUrl = resourceUrl;
    }

    /**
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * @returns {string}
     */
    getImageUrl() {
        return this.imageUrl;
    }

    /**
     * @returns {string}
     */
    getUrl() {
        return this.resourceUrl;
    }
}
