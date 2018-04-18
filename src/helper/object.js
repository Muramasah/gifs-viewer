import { isArrayEmptyOrUndefined } from './array';

/**
 * Adapter function, can be remplazed by normalizr
 * @param {*} response 
 */
export const mapResultGifsToObject = (response) => {
    const rawGifs = response.data || [];

    if (isArrayEmptyOrUndefined(rawGifs)) {
        return {};
    } else {
        let gifObject = { gifs: {} };

        rawGifs.forEach((gif) => {
            const { id, slug, images } = gif;
            const url = images.downsized_medium.gif_url

            gifObject.gifs[id] = { id, slug, url };
        })

        return gifObject;
    }

};

export const isObjectEmptyOrUndefined = (object) => Object.keys(object).length === 0 && object.constructor === Object