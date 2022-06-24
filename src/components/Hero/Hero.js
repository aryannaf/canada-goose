import React from 'react'
import './Hero.scss';
import sustainable from '../../assets/sustainable-hero.jpg';

function Hero() {
  return (
    <div className="hero">
        <img className="hero__image" src={sustainable} alt="two people in forest wearing Canada Goose Chilliwack Fleece Bomber"/>
        <div className="hero__label">
            <h5 className="hero__title">HUMANATURE</h5>
            <h1 className="hero__subtitle">Sustainable styles</h1>
            <p className="hero__descriptor">Seen in image: <span className="hero__product">Chilliwack Fleece Bomber</span></p>
        </div>
    </div>
  )
}

export default Hero