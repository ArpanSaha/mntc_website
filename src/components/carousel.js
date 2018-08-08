import React,{ Component } from 'react';
import Carousel from 'nuka-carousel';
import './css/carousel.css';
import $ from 'jquery';

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
                'caption': "Maths Moments Magic"
            },
            {
                'name': '2.jpg',
                'caption': "Image 2"
            },
            {
                'name': '4.jpg',
                'caption': "Image 3"
            }
        ]
      return (
        <Carousel 
            autoplay="true" 
            autoplayInterval="1500" 
            wrapAround="true"
            renderCenterLeftControls={({ previousSlide }) => (
                <i onClick={previousSlide} class="fa fa-chevron-left fa-2x"></i>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <i onClick={nextSlide} class="fa fa-chevron-right fa-2x"></i>
            )}
        >
            {carouselItems.map((item, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="image-cont" key={index}>
                    <img src={"assets/" + item.name} />
                    <p className="image-desc">{item.caption}</p>
=======
=======

>>>>>>> 8280817b... Event page updated
                <div className="slider-container" key={index}>
                    <div className="image-container">
                        <img src={"assets/" + item.name} />
                    </div>
                    <div className="black-wrapper">
                        <div className="image-desc-container">
                            <p>{item.caption}</p>
                            <button >
                            <i class="far fa-arrow-alt-down" onClick={this.scrollfunc}></i>
                            </button>
                        </div>
                    </div>
<<<<<<< HEAD

>>>>>>> 60f955ba... Event Page updated
=======
>>>>>>> 8280817b... Event page updated
                </div>
            ))}
        </Carousel>
      );
    }
  }
