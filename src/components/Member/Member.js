import React from "react";
import "./Member.scss";
import carousel2_1 from "../../assets/Carousel2_1.png";
import carousel2_2 from "../../assets/Carousel2_2.png";
import carousel2_3 from "../../assets/Carousel2_3.png";

function Member() {
  return (
    <section className="member">
      <div className="member__intro">
        <h1 className="member__title">Beyond the Parka</h1>
        <p className="member__text">
          Build a more sustainable future by investing in pieces that are built
          to last
        </p>
        <button className="member__button">Become a Member</button>
        <button className="member__button">Shop the Collection</button>
      </div>

      <div className="member__info">
        <div className="member__card">
          <img className="member__image" src={carousel2_1} alt="Cliff" />
          <div className="member__card-info">
            <h1 className="member__name">Kind Fleece</h1>
            <p className="member__paragraph">
              Our sustainable fleece is made from recycled wool. New colors
              available exclusively to Beyond + members.
            </p>
          </div>
        </div>
        <div className="member__card">
          <img className="member__image" src={carousel2_2} alt=">Forest" />
          <div className="member__card-info">
            <h1 className="member__name">Digital Concierge</h1>
            <p className="member__paragraph">
              Beyond+ members can schedule virtual consults with our outerwear
              experts to choose the pieces that best fit your needs and
              lifestyle.
            </p>
          </div>
        </div>
        <div className="member__card">
          <img className="member__image" src={carousel2_3} alt=">Winter" />
          <div className="member__card-info">
            <h1 className="member__name">Priority Customer Service</h1>
            <p className="member__paragraph">
              Beyond + members get access to dedicated customer service agents
              to address questions and needs as they arise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Member;
