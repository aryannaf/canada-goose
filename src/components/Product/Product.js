import React from "react";
import "./Product.scss";

function Product() {
  return (
    <section className="product">
      <div className="product__options">
        <p className="product__title">Travel Light Essentials</p>
        <ul className="product__list">
          <li className="product__item">3 Results</li>
          <li className="product__item">Sort</li>
          <li className="product__item">Filter +</li>
        </ul>
      </div>

      <div className="product__clothes">
        <div className="product__card">
          <img
            className="product__image"
            src="https://images.canadagoose.com/image/upload/w_580,c_scale,f_auto,q_auto:best/v1639234599/product-image/8833U_61.jpg"
            alt=">Waist Pack"
          />
          <div className="product__info">
            <div className="product__card-info">
              <p className="product__name">Waist Pack</p>
              <p className="product__price">$295</p>
            </div>
            <p className="product__colors">3 Colors</p>
          </div>
        </div>
        <div className="product__card">
          <img
            className="product__image"
            src="https://images.canadagoose.com/image/upload/w_580,c_scale,f_auto,q_auto:best/v1648835078/product-image/7779L_1319_b.jpg"
            alt="Cypress Puffer Boot"
          />
          <div className="product__info">
            <div className="product__card-info">
              <p className="product__name">Cypress Puffer Boot</p>
              <p className="product__price">$550</p>
            </div>
            <p className="product__colors">3 Colors</p>
          </div>
        </div>
        <div className="product__card">
          <img
            className="product__image"
            src="https://images.canadagoose.com/image/upload/w_580,c_scale,f_auto,q_auto:best/v1646406693/product-image/7402L3_439_a.jpg"
            alt="Muskoka Womens Pant Arctic Florals"
          />
          <div className="product__info">
            <div className="product__card-info">
              <p className="product__name">
                Muskoka Womens Pant Arctic Florals
              </p>
              <p className="product__price">$350</p>
            </div>
            <p className="product__colors">3 Colors</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
