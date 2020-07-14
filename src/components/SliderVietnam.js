import React, {useState} from 'react';
import './slider.scss';
import Images from './Images';
import vietnam1 from '../assets/images/vietnam/vietnam1.jpg';
import vietnam2 from '../assets/images/vietnam/vietnam2.jpg';
import vietnam4 from '../assets/images/vietnam/vietnam4.jpg'; 
import vietnam5 from '../assets/images/vietnam/vietnam5.jpg'; 
import vietnam6 from '../assets/images/vietnam/vietnam6.jpg'; 
import vietnam7 from '../assets/images/vietnam/vietnam7.jpg'; 
import vietnam8 from '../assets/images/vietnam/vietnam8.jpg'; 
import vietnam9 from '../assets/images/vietnam/vietnam9.jpg'; 
import vietnam10 from '../assets/images/vietnam/vietnam10.jpg'; 
import vietnam11 from '../assets/images/vietnam/vietnam11.jpg'; 
import vietnam12 from '../assets/images/vietnam/vietnam12.jpg'; 
import vietnam13 from '../assets/images/vietnam/vietnam13.jpg'; 
import vietnam14 from '../assets/images/vietnam/vietnam14.jpg'; 
import vietnam15 from '../assets/images/vietnam/vietnam15.jpg'; 
import vietnam3 from '../assets/images/vietnam/vietnam3.jpg'; 

function Slider(){
    let sliderArr = [<Images src={vietnam1} />,<Images src={vietnam2} /> ,<Images src={vietnam3}/> , <Images src={vietnam4}/> ,
        <Images src={vietnam5}/> , <Images src={vietnam6}/> , <Images src={vietnam7}/> , <Images src={vietnam8}/> , <Images src={vietnam9}/> , <Images src={vietnam10}/> 
    , <Images src={vietnam11}/> , <Images src={vietnam12}/>, <Images src={vietnam13}/>, <Images src={vietnam14}/> , <Images src={vietnam15}/>  ]

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