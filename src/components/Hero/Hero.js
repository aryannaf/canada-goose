import React from 'react'
import './Hero.scss';
import hero from '../../assets/Hero.png';

function Hero() {
  return (
    <div className="hero">
        <img className="hero__image" src={hero} alt="video of girl in Canada Goose apparel"/>
        <div className="hero__label">
            <h1 className="hero__title">Bring Along</h1>
            <p className="hero__tag-line">Live in the open with light layers ready for every destination.</p>
            <button className="hero__shop">Shop the Collection</button>
        </div>
    </div>
  )
}

export default Hero