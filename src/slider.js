import React from 'react';
import { Carousel } from "react-bootstrap";

 const slider = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/slider1.jpg')}
            alt="First slide"
            height="250"
          />
          <Carousel.Caption>
          <i><h3>Thank you .....</h3></i>
            <p>I look at you and I see the person I have fallen in love with over and over again.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/slider2.jpg')}
            alt="Third slide"
            height="250"
          />
      
          <Carousel.Caption>
         <i> <h3>Thank you .....</h3> </i>
            <p>You are the person who makes me feel like I am complete, so thank you for everything.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/slider3.jpg')}
            alt="Third slide"
            height="250"
          />
      
          <Carousel.Caption>
          <i><h3>Thank you .....</h3></i>
            <p>You see, you are the one I have truly wanted to be together with so this is a dream come true.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/slider4.jpg')}
            alt="Third slide"
            height="250"
          />
      
          <Carousel.Caption>
          <i><h3>Thank you .....</h3></i>
            <p>No relationship is perfect which is why I am thankful that you love my imperfections.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/slider5.jpg')}
            alt="Third slide"
            height="250"
          />
      
          <Carousel.Caption>
          <i><h3>Thank you .....</h3></i>
            <p>I want to tell you that I just do not love you, I live for you, you are my life, my love.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/slider6.jpg')}
            alt="Third slide"
            height="250"
          />
      
          <Carousel.Caption>
          <i><h3>Thank you .....</h3></i>
            <p>I love the way you smile at me just before I start to fall asleep and how you watch over me.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default slider;