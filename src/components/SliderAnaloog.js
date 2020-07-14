import React, {useState} from 'react';
import './slider.scss';
import Images from './Images';
import analoog1 from '../assets/images/analoog/analoog1.jpg';
import analoog2 from '../assets/images/analoog/analoog2.jpg';
import analoog3 from '../assets/images/analoog/analoog3.jpg'; 
import analoog4 from '../assets/images/analoog/analoog4.jpg'; 
import analoog5 from '../assets/images/analoog/analoog5.jpg'; 
import analoog6 from '../assets/images/analoog/analoog6.jpg'; 
import analoog7 from '../assets/images/analoog/analoog7.jpg'; 
import analoog8 from '../assets/images/analoog/analoog8.jpg'; 
import analoog9 from '../assets/images/analoog/analoog9.jpg'; 
import analoog10 from '../assets/images/analoog/analoog10.jpg'; 
import analoog11 from '../assets/images/analoog/analoog11.jpg'; 
import analoog12 from '../assets/images/analoog/analoog12.jpg'; 
import analoog13 from '../assets/images/analoog/analoog13.jpg'; 
import analoog14 from '../assets/images/analoog/analoog14.jpg'; 
import analoog15 from '../assets/images/analoog/analoog15.jpg'; 
import analoog16 from '../assets/images/analoog/analoog16.jpg'; 
import analoog17 from '../assets/images/analoog/analoog17.jpg'; 
import analoog18 from '../assets/images/analoog/analoog18.jpg'; 
import analoog19 from '../assets/images/analoog/analoog19.jpg'; 
import analoog20 from '../assets/images/analoog/analoog20.jpg'; 

function Slider(){
    let sliderArr = [<Images src={analoog1} />,<Images src={analoog2} /> ,<Images src={analoog3}/> , <Images src={analoog4}/> ,
        <Images src={analoog5}/> , <Images src={analoog6}/> , <Images src={analoog7}/> , <Images src={analoog8}/> , <Images src={analoog9}/> , <Images src={analoog10}/> 
    , <Images src={analoog11}/> , <Images src={analoog12}/>, <Images src={analoog13}/>, <Images src={analoog14}/> , <Images src={analoog15}/>,
<Images src={analoog16}/>, <Images src={analoog17}/> , <Images src={analoog18}/> , <Images src={analoog19}/> , <Images src={analoog20}/>   ]

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