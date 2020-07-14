import React, {useState} from 'react';
import './slider.scss';
import Images from './Images';
import ca1 from '../assets/images/ca/ca1.jpg';
import ca2 from '../assets/images/ca/ca2.jpg';
import ca3 from '../assets/images/ca/ca3.jpg'; 
import ca4 from '../assets/images/ca/ca4.jpg'; 
import ca5 from '../assets/images/ca/ca5.jpg'; 
import ca6 from '../assets/images/ca/ca6.jpg'; 
import ca7 from '../assets/images/ca/ca7.jpg'; 
import ca8 from '../assets/images/ca/ca8.jpg'; 
import ca9 from '../assets/images/ca/ca9.jpg'; 
import ca10 from '../assets/images/ca/ca10.jpg'; 
import ca11 from '../assets/images/ca/ca11.jpg'; 
import ca12 from '../assets/images/ca/ca12.jpg'; 
import ca13 from '../assets/images/ca/ca13.jpg'; 
import ca14 from '../assets/images/ca/ca14.jpg'; 
import ca15 from '../assets/images/ca/ca15.jpg'; 
import ca16 from '../assets/images/ca/ca16.jpg'; 
import ca17 from '../assets/images/ca/ca17.jpg'; 
import ca18 from '../assets/images/ca/ca18.jpg'; 
import ca19 from '../assets/images/ca/ca19.jpg'; 
import ca20 from '../assets/images/ca/ca20.jpg'; 
import ca21 from '../assets/images/ca/ca21.jpg'; 

function Slider(){
    let sliderArr = [<Images src={ca1} />,<Images src={ca2} /> ,<Images src={ca3}/> , <Images src={ca4}/> ,
        <Images src={ca5}/> , <Images src={ca6}/> , <Images src={ca7}/> , <Images src={ca8}/> , <Images src={ca9}/> , <Images src={ca10}/> 
    , <Images src={ca11}/> , <Images src={ca12}/>, <Images src={ca13}/>, <Images src={ca14}/> , <Images src={ca15}/>,
<Images src={ca16}/>, <Images src={ca17}/> , <Images src={ca18}/> , <Images src={ca19}/> , <Images src={ca20}/> , <Images src={ca21}/>   ]

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