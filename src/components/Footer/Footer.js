import React from 'react'
import './Footer.scss'
import footer from '../../assets/footer.png'

function Footer() {
  return (
    <footer className='footer'>
        <img className='footer__image' src={footer} alt="footer content"/>
    </footer>
  )
}

export default Footer