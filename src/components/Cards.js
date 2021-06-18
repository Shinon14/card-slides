import React from "react";
import Card from "./Card";
import image1 from '../assets/Blackjack.png'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'BlackJack',
        image: image1,
        url: 'https://shinon14.github.io/blackjack/',
        text: 'Este es un ejemplo de mi primera App web creada unicamente con JavaScript, en el que se destaca el uso de constantes, funciones tipo flecha, carga de imagenes, operadores tenarios y entre muchos, ademas de destacar el Clean Code.'
    },
    {
        id: 2,
        title: 'Cards-slides',
        image: image2,
        url:'https://faztweb.com'

    },
    {
        id: 3,
        title: 'Proximamente...',
        image: image3,
        url:'https://faztweb.com'

    }

]

function Cards() {
  return (
    <div class="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
              {
                  cards.map(card => (
                      <div className="col-md-4" key ={card.id}>
                          <Card title={card.title} imageSource={card.image} url={card.url} text={ card.text}/>
                      </div>
                  ) )
        }
      </div>
    </div>
  );
}

export default Cards;
