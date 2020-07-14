import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 3, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info test" style={style}>
            <p className="g-card-title" id="test">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p> <br/>
            <a href={props.linkCode} target="_blank" rel="noopener noreferrer" className="codeBtn">Bekijk Code</a>
            <br/><br/>
            {
                (props.link === undefined)? '':<a href={props.link} target="_blank" rel="noopener noreferrer" className="webBtn">Bekijk Website</a> 
            }
            

        </animated.div>
    );

}

export default CardInfo;