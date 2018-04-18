/**
 * Select an element by id and changes the style
 * to display: block
 * @param {string} id 
 */
export const showElementByID = (id) => {
    document
        .getElementById(id)
        .style
        .display = 'block';
};

/**
 * Select an element by id and changes the style
 * to display: none
 * @param {string} id 
 */
export const hideElementByID = (id) => {
    document
        .getElementById(id)
        .style
        .display = 'none';
};

export const generateUiID = () => {
    const size = 20;
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const posibleLength = possible.length;
    let uiID = '';
    let ii = 0;

    for (ii; ii < size; ii++) {
        uiID += possible.charAt(
            Math.floor(
                Math.random() * posibleLength
            )
        );
    }

    return uiID
}