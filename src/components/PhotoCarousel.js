import React, {Component} from 'react';

import vietnamCover from '../assets/images/vietnam/vietnamCover.jpg';
import CACover from '../assets/images/ca/CACover.jpg';
import ZACover from '../assets/images/za/ZACover.jpg';
import kaskCover from '../assets/images/kask/kaskCover.jpg';
import MarCover from '../assets/images/marrakech/MarCover.jpg';
import AnaloogCover from '../assets/images/analoog/AnaloogCover.jpg'


import PhotoCard from '../components/PhotoCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Vietnam',
                    subTitle: '2016',
                    imgSrc: vietnamCover,
                    link: '/vietnam',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Centraal-Amerika',
                    subTitle: '2017-2018',
                    imgSrc: CACover,
                    link: '/centraal-amerika',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Zuid-Afrika',
                    subTitle: '2015',
                    imgSrc: ZACover,
                    link: '/zuid-afrika',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Analoog',
                    subTitle: 'zwart-witjes van overal',
                    imgSrc: AnaloogCover,
                    link: '/analoog',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Marrakech',
                    subTitle: '2014',
                    imgSrc: MarCover,
                    link: '/marrakech',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Mode@KASK',
                    subTitle: '2014 - studieproject',
                    imgSrc: kaskCover,
                    link: '/kask',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
 
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <PhotoCard className="card" item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true} className="PhotoDiv">
                <Row className="justify-content-around photoRow">
                   
                    {this.makeItems(this.state.items)}
                   
                </Row>
            </Container>
        );
    }

}

export default Carousel;