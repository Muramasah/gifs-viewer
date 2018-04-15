/**
 * isComponentLoading
 * 
 * @param {*} status 
 */
export const isComponentLoading = ({ status }) => status === 'loading';

/**
 * setLoadedState
 * @param {*} component 
 * @param {*} payload 
 */
export const setLoadedState = (component, payload) => {
    return component.setState({ ...payload, status: 'loaded' });
};