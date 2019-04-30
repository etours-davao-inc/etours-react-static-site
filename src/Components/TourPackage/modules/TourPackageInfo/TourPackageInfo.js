import React from 'react';

import {Image} from 'cloudinary-react';

import './TourPackageInfo.css';

const TourPackageInfo = props => {
    return (
     <div className="tourpackage_info_wrapper">
      <Image 
        cloudName="etours-davao-inc"
        id="tourpackage_banner"
        width="650"
        crop="thumb"
        publicId={props.data.photo} />
       <h1 id="tourpackage_title">{props.data.name}</h1>
       <p id="tourpackage_code_duration">{props.data.duration_text}</p>
       <p id="tourpackage_description">{props.data.description}</p>
       <div id="tourpackage_info_wrapper" dangerouslySetInnerHTML={{ __html: props.data.info }}>
       </div>
     </div>
    )
}

export default TourPackageInfo;

