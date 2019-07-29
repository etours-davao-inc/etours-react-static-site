import React from 'react';

import './TourPackageInfo.css';

const TourPackageInfo = props => {
    return (
     <div className="tourpackage_info_wrapper">
       <h1 id="tourpackage_title" className="m-0 pb-0">{props.data.name}</h1>
       <span><small>Last Updated: {props.lastUpdate}</small></span>
       <p id="tourpackage_code_duration" className="mt-3">{props.data.duration_text}</p>
       <p id="tourpackage_description">{props.data.description}</p>
       <div id="tourpackage_info_wrapper" dangerouslySetInnerHTML={{ __html: props.data.info }} />
       <h3 style={{ color: '#d35400', fontSize: '1em'}}>Terms and conditions</h3>
       <div id="tourpackage_info_wrapper" dangerouslySetInnerHTML={{ __html: props.data.terms }} />
       <h3 style={{ color: '#d35400', fontSize: '1em'}}>Responsibilities</h3>
       <div id="tourpackage_info_wrapper" dangerouslySetInnerHTML={{ __html: props.data.responsibilites }} />
     </div>
    )
}

export default TourPackageInfo;

