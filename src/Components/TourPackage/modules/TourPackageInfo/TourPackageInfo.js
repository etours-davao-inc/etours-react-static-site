import React from 'react';

import './TourPackageInfo.css';

const TourPackageInfo = props => {
    return (
     <div className="tourpackage_info_wrapper">
       <h1 id="tourpackage_title">{props.data.name}</h1>
       <span>Last Updated: {props.lastUpdate}</span>
       <p id="tourpackage_code_duration">{props.data.duration_text}</p>
       <p id="tourpackage_description">{props.data.description}</p>
       <div id="tourpackage_info_wrapper" dangerouslySetInnerHTML={{ __html: props.data.info }}>
       </div>
     </div>
    )
}

export default TourPackageInfo;

