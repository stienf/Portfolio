import React, {useState} from 'react';
import './slider.scss';
import Images from './Images';
import kask1 from '../assets/images/kask/kask1.jpg';
import kask2 from '../assets/images/kask/kask2.jpg';
import kask3 from '../assets/images/kask/kask3.jpg'; 
import kask4 from '../assets/images/kask/kask4.jpg'; 
import kask5 from '../assets/images/kask/kask5.jpg'; 
import kask6 from '../assets/images/kask/kask6.jpg'; 
import kask7 from '../assets/images/kask/kask7.jpg'; 
import kask8 from '../assets/images/kask/kask8.jpg'; 
import kask9 from '../assets/images/kask/kask9.jpg'; 
import kask10 from '../assets/images/kask/kask10.jpg'; 
import kask11 from '../assets/images/kask/kask11.jpg'; 
import kask12 from '../assets/images/kask/kask12.jpg'; 



function Slider(){
    let sliderArr = [<Images src={kask1} />,<Images src={kask2} /> ,<Images src={kask3}/> , <Images src={kask4}/> ,
        <Images src={kask5}/> , <Images src={kask6}/> , <Images src={kask7}/> , <Images src={kask8}/> , <Images src={kask9}/> , <Images src={kask10}/> 
    , <Images src={kask11}/> , <Images src={kask12}/> ]

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