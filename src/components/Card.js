import React from "react";
import PropTypes from "prop-types";
import 'animate.css/animate.min.css'
import './cards.css'

function Card({ title, imageSource, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">

      <div className="overflow">
        <img src={imageSource} alt=""class="card-img-top" />
      </div>
      
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p class="card-text text-secondary">
          {text
            ? text
            : ' Facere pariatur amet similique commodi at nobis alias odio assumenda repellendus a dolor dolorum ipsa laborum praesentium autem corruptilabore.'
          }
        </p>
        <a
          href={url}
          class="btn btn-outline-secondary rounded-0"
          target="_blank"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
};

export default Card;
