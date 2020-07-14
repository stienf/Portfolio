import React, {useState} from 'react';
import './slider.scss';
import Images from './Images';
import mar1 from '../assets/images/marrakech/mar1.jpg';
import mar2 from '../assets/images/marrakech/mar2.jpg';
import mar3 from '../assets/images/marrakech/mar3.jpg'; 
import mar4 from '../assets/images/marrakech/mar4.jpg'; 
import mar5 from '../assets/images/marrakech/mar5.jpg'; 
import mar6 from '../assets/images/marrakech/mar6.jpg'; 
import mar7 from '../assets/images/marrakech/mar7.jpg'; 
import mar8 from '../assets/images/marrakech/mar8.jpg'; 
import mar9 from '../assets/images/marrakech/mar9.jpg'; 
import mar10 from '../assets/images/marrakech/mar10.jpg'; 
import mar11 from '../assets/images/marrakech/mar11.jpg'; 




function Slider(){
    let sliderArr = [<Images src={mar1} />,<Images src={mar2} /> ,<Images src={mar3}/> , <Images src={mar4}/> ,
        <Images src={mar5}/> , <Images src={mar6}/> , <Images src={mar7}/> , <Images src={mar8}/> , <Images src={mar9}/> , <Images src={mar10}/> 
    , <Images src={mar11}/>  ]

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