import React, {Component} from 'react';

import cocktail from '../assets/images/cocktail.png';
import recipe from '../assets/images/recipe.jpg';
import blogapp from '../assets/images/blogapp.png';

import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Cocktail Shaker',
                    subTitle: 'API project',
                    imgSrc: cocktail,
                    link: 'https://stienf.github.io/CocktailShaker/',
                    linkCode: 'https://github.com/stienf/CocktailShaker',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Recipe Shoppinglist',
                    subTitle: 'Javascript project',
                    imgSrc: recipe,
                    link: 'https://stienf.github.io/RecipeBlog/',
                    linkCode: 'https://github.com/stienf/RecipeBlog',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Blog Application',
                    subTitle: 'Express blog app',
                    imgSrc: blogapp,
                    link: undefined,
                    linkCode: 'https://github.com/stienf/ExpressBlogProject',
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
            return <Card className="card" item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around webRow">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;