import React from 'react';
import Carousel from '../components/Carousel';


function WebAppPage(props){
return(
<div className="webAppPage">
<h2 className="webAppTitle">Web apps</h2>
<h6>Klik op de website om meer te bekijken</h6>
<Carousel />
</div>
);
}

export default WebAppPage;