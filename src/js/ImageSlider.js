import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../App.css';
import { Link } from 'react-router-dom';
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
  
    setCurrent(current === length - 1 ? 0 : current + 1);
   console.log("intervale ok");
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


setTimeout(nextSlide,5000);
  return (
    <section>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
               <section class="main" style={{ 
                backgroundImage: 'url('+slide.image+')' 
                    }}>
                <div class="row py-4">
                    <div class="col-lg-6 pt-5 text-center">
                        <h1>Nos {slide.produit} </h1>
                       <Link to={{      pathname: "/Shop_"+slide.produit
                }}> <button class="btn1 mt-2">En savoir plus</button></Link>
                    </div>
                </div>
                </section>
              
              
            )}

          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
