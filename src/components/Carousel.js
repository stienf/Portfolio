import React, { Component } from "react";

import cocktail from '../assets/images/cocktail.png';
import recipe from '../assets/images/recipe.jpeg';
import test from '../assets/images/test.png';

class Carousel extends Component {

    constructer(props) {
        //super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Cocktail Shaker',
                    subtitle: 'Recipes for Cocktails',
                    imgSrc: cocktail,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My Favourite Recipes',
                    subtitle: 'My personal favourites',
                    imgSrc: recipe,
                    link: '',
                    selected: false
                },
                {
                    id: 3,
                    title: 'TEST',
                    subtitle: 'TEST',
                    imgSrc: test,
                    link: '',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true ; 
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })
    }


    render() {
        return (
            <p>Carousel works</p>
        );
    }
}

export default Carousel;