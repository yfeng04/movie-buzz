import React from 'react';
import globalHook from 'use-global-hook';
import { appStorageName } from '../globals/globals';

// Get favourited movies from localStorage
function getFavs(){
    
    let favsFromStorage = localStorage.getItem(appStorageName)

    if (favsFromStorage === null){
        favsFromStorage = [];
    }else {
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;

}

const actions = {
    addFav: (store, movie) => {
        
        const newFavs = [...store.state.favs, movie]
        
        const newFavsForStorage = JSON.stringify(newFavs)
        
        localStorage.setItem(appStorageName, newFavsForStorage);
        
        store.setState({ favs: newFavs });      
    },
    removeFav: (store, id) => {
        
        let currentFavs = store.state.favs;
        
        const indexOfMovieToRemove = currentFavs.findIndex((movie) => movie.id === id);
        
        currentFavs.splice(indexOfMovieToRemove, 1);
        
        let favsForStorage = JSON.stringify(currentFavs);
        
        localStorage.setItem(appStorageName, favsForStorage);
        
        store.setState({ favs: currentFavs });
    },
    setFavs: (store) => {
        store.setState({ favs: getFavs() })
    }
}

const initialState = {
    favs: getFavs(),
}
const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
