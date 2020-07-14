import React from 'react';

import PhotoCardInfo from '../components/PhotoCardInfo';



function PhotoCard(props) {

    return(
        
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <PhotoCardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} linkCode={props.item.linkCode}/> }
        </div>
        
    );

}

export default PhotoCard;