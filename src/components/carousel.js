import React,{ Component } from 'react';
import Carousel from 'nuka-carousel';
import './css/carousel.css';
import $ from 'jquery';
import Particles from 'react-particles-js';

export default class extends React.Component {
    scrollfunc(){
        $('html, body').animate({
            scrollTop: $("#aboutus").offset().top
        }, 2000);  
    }
    render() {
        let carouselItems = [
            {
                'name': '1.jpg',
                'caption': "Digging the Digits"
            },
            {
                'name': '2.jpg',
                'caption': "Instilling rational and logical thinking in inquisitive minds."
            },
            {
                'name': '4.jpg',
                'caption': "Integrating Moments"
            }
        ]
      return (
        <Carousel 
            autoplay="false" 
            autoplayInterval="4000" 
            wrapAround="true"
            renderCenterLeftControls={({ previousSlide }) => (
                <i onClick={previousSlide} className="fa fa-chevron-left fa-2x"></i>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <i onClick={nextSlide} className="fa fa-chevron-right fa-2x"></i>
            )}
        >
            {carouselItems.map((item, index) => (
                <div className="slider-container" key={index}>
                    <div className="image-container">
                        <img src={"assets/" + item.name} />
                    </div>
                    <div className="black-wrapper">
                        <div className="image-desc-container">
                            <p>{item.caption}</p>
                            <i className="fa fa-angle-double-down" style={{'cursor':'auto'}}></i>
                            
                        </div>
                        <Particles 
                            params={{
                            particles: {
                                number:{ 
                                    value : 150
                                }
                            }
                        }}
                        />
                    </div>

                </div>
            ))}
        </Carousel>
      );
    }
  }
