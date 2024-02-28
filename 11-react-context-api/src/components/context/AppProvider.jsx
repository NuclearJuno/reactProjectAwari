import { useEffect, useState } from 'react';

import { AppContext } from './AppContext';

import { getInitialState } from './getInitialState';

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(getInitialState);
    const add = (item) => {
        setFavorites([...favorites, item.id]);
    };
    const remove = (item) => {
        const filtered = favorites.filter((id) => id !== item.id);
        setFavorites(filtered);
    };
    const set = (item) => {
        setFavorites(item);
    };
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
    return (
        <AppContext.Provider value={{ favorites, add, remove, set }}>
            {children}
        </AppContext.Provider>
    );
}
