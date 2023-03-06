import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import test from '../images/cyBn5z.jpg'


const slideImages = [
  {
    url: '../images/cyBn5z.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
  },
];


const Slider = () => {
    
    return (
      <div style={{width:"20em", height:"20em"}} className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slider;


