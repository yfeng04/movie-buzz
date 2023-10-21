import React from "react";
import { useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';

function PageHome({ sort }) {

    const [pageNum, setPageNum] = useState(1);
    
    const showMoreMovies = () => {
        setPageNum ((preValue)=> preValue + 1);
    }

    const resetMovies = () => {
        setPageNum (1);
    }

    return (
        <section className="home-page">
            <NavSort/>
            <div className="movies-container">
                <Movies sort={sort} pageNum={pageNum} resetMovies={resetMovies} />
            </div>
            <button onClick={showMoreMovies} className="loadmore">Load More</button>
        </section>
    )
}

export default PageHome;
