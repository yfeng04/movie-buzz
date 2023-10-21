import React from "react";
import useGlobal from '../store/globalAppState';

function FavButton({ movie }) {

    const [globalState, globalActions] = useGlobal();

    function isFav(id){
        if(globalState.favs.length === 0){
            return false;
        }

        return globalState.favs.some((movie) => movie.id === id);
    }

    const emptyheart = <i className="far fa-heart"></i>;
    const solidheart = <i className="fas fa-heart"></i>;

    return (
        <>
            {isFav(movie.id) ?
                <button className="fav-btn" 
                        onClick={() => { globalActions.removeFav(movie.id); }}>
                        {solidheart}
                </button> :
                <button className="fav-btn" 
                        onClick={() => { globalActions.addFav(movie); }}>
                        {emptyheart}
                </button>
            }
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
