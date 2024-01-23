export const getInitialState = () => {
    const localData = localStorage.getItem('favorites');

    if (!localData) {
        return [];
    }
    return JSON.parse(localData);
}
