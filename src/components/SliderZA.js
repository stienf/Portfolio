import React, {useState} from 'react';
import './slider.scss';
import Images from './Images';
import za1 from '../assets/images/za/za1.jpg';
import za2 from '../assets/images/za/za2.jpg';
import za3 from '../assets/images/za/za3.jpg'; 
import za4 from '../assets/images/za/za4.jpg'; 
import za5 from '../assets/images/za/za5.jpg'; 
import za6 from '../assets/images/za/za6.jpg'; 
import za7 from '../assets/images/za/za7.jpg'; 
import za8 from '../assets/images/za/za8.jpg'; 
import za9 from '../assets/images/za/za9.jpg'; 
import za10 from '../assets/images/za/za10.jpg'; 
import za11 from '../assets/images/za/za11.jpg'; 
import za12 from '../assets/images/za/za12.jpg'; 
import za13 from '../assets/images/za/za13.jpg'; 
import za14 from '../assets/images/za/za14.jpg'; 
import za15 from '../assets/images/za/za15.jpg'; 
import za16 from '../assets/images/za/za16.jpg'; 


function Slider(){
    let sliderArr = [<Images src={za1} />,<Images src={za2} /> ,<Images src={za3}/> , <Images src={za4}/> ,
        <Images src={za5}/> , <Images src={za6}/> , <Images src={za7}/> , <Images src={za8}/> , <Images src={za9}/> , <Images src={za10}/> 
    , <Images src={za11}/> , <Images src={za12}/>, <Images src={za13}/>, <Images src={za14}/> , <Images src={za15}/>,
<Images src={za16}/> ]

    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ? setX( -100 * (sliderArr.length -1)) : setX(x + 100);    }
    const goRight = () => {
        x === -100 * (sliderArr.length -1) ? setX(0) : setX(x - 100);
    }
    
    return(
        <div className="slider">
            {
                sliderArr.map((item,index) => {
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
        <button id="goLeft" onClick={goLeft}>
        <i className="fas fa-3x fa-chevron-left chevron"></i>
        </button>
        <button id="goRight" onClick={goRight}>
            <i className="fas fa-3x fa-chevron-right chevron"></i>
        </button>
        </div>
    )
}

export default Slider;