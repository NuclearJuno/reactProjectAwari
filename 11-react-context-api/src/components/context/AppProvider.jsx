import { useCallBack, useEffect, useState } from 'react';

import { AppContext } from './AppContext';

import { getInitialState } from './getInitialState';

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(getInitialState);
    const add = useCallBack((item) => {
        setFavorites([...favorites, item.id]);
    }, [favorites]);
    const remove = useCallBack((item) => {
        const filtered = favorites.filter((id) => id !== item.id);
        setFavorites(filtered);
    }, [favorites]);
    const set = useCallBack((item) => {
        setFavorites(item);
    }, []);
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
    return (
        <AppContext.Provider value={{ favorites, add, remove, set }}>
            {children}
        </AppContext.Provider>
    );
}
