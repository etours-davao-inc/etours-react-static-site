import React from 'react';
import data from '../data.json';

const Banner = props => {
    return (
        <div id="index_banner" style={{backgroundImage:`url(${data['banner_url']})`}}></div>
    )
}

export default Banner;