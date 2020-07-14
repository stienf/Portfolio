import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';


function PhotographyPage(props){
return(
<div className="PhotographyPage">
<h2 className="PhotoTitle">Fotografie</h2>
<h6>Klik op de foto's om meer te bekijken</h6>
<PhotoCarousel />
</div>
);
}

export default PhotographyPage;