import React, { useState } from 'react'
import './Hero.scss';
import hero from '../../assets/Hero.png';
import Modal from 'react-modal';
import cross from '../../assets/cross.png';

function Hero() {

  // state = {
  //   showModal: false
  // }

  // openModal = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.openModal()
  //   }, 2000);
  // }

  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true)
  }, 2000)


    return (
      <div className="hero">
        <div className="hero__modal">
          <div className="hero__modal-container">
            <div className="hero__modal-control">
              <img className="hero__modal-exit" src={cross} alt="exit" />
            </div>
            <div className="hero__modal-content">
              <h2 className="hero__modal-title">Join us Beyond the Parka.</h2>
              <p className="hero__modal-description">Become a member of our sustainability club and join us on our mission to keep the earth cool, while keeping you warm.</p>
              <button className="hero__modal-button">Learn More</button>
            </div>
          </div>
        </div>
        <img className="hero__image" src={hero} alt="video of girl in Canada Goose apparel" />
        <div className="hero__label">
          <h1 className="hero__title">Bring Along</h1>
          <p className="hero__tag-line">Live in the open with light layers ready for every destination.</p>
          <button className="hero__shop">Shop the Collection</button>
        </div>
      </div>
    )
}

export default Hero