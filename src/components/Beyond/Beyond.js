import React from "react";
import "./Beyond.scss";
import carousel_1 from "../../assets/Carousel_1.png";
import carousel_2 from "../../assets/Carousel_2.png";
import carousel_3 from "../../assets/Carousel_3.png";
import video from  "../../assets/Video.png";

function Beyond() {
  return (
    <section className="beyond">
      <img className="beyond__video" src={video} alt="video"/>
      <div className="beyond__intro">
        <h1 className="beyond__title">Go Beyond +</h1>
        <p className="beyond__text">
          Keeping the Planet Cold and the People On It Warm. Canada Goose has a
          commitment to the future. We are giving back, protecting our planet
          and we want you to join us.
        </p>
        <button className="beyond__button">Join Beyond +</button>
      </div>

      <div className="beyond__info">
        <div className="beyond__card">
          <img className="beyond__image" src={carousel_1} alt="Cliff" />
          <div className="beyond__card-info">
            <h1 className="beyond__name">Beyond the Parka</h1>
            <p className="beyond__paragraph">
              Our new line is made with planet-friendly sustainable materials.
              Be the first to wear our sustainable pieces before they become
              available to the public.
            </p>
          </div>
        </div>
        <div className="beyond__card">
          <img className="beyond__image" src={carousel_2} alt=">Forest" />
          <div className="beyond__card-info">
            <h1 className="beyond__name">Travel the World With Us</h1>
            <p className="beyond__paragraph">
              Join us for members-only events and experiences. Attend live
              in-store, or receive a QR code for the virtual experience
            </p>
          </div>
        </div>
        <div className="beyond__card">
          <img className="beyond__image" src={carousel_3} alt=">Winter" />
          <div className="beyond__card-info">
            <h1 className="beyond__name">Stay Connected</h1>
            <p className="beyond__paragraph">
              Every month, you’ll receive a link to one of our short films that
              highlights a topic near and dear to the hearts of those in
              communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beyond;
