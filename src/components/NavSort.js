import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';

function NavSort() {

    const [option, setOption] = useState(false);

    const onChange = (e) => {
        e.preventDefault();
        setOption(e.target.value);
    }

    return (
        <>
        {option && <Redirect to={option}/>}
        <form className='select'>
            <select onChange = {onChange} name="sort-menu" id="sort-menu">
                <option value='/sort/popular'>Popular</option>
                <option value='/sort/top-rated'>Top Rated</option>
                <option value='/sort/now-playing'>Now Playing</option>
                <option value='/sort/upcoming'>Upcoming</option>
            </select>
        </form>
        </>
    )
}

export default NavSort
