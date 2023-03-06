// import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';



export const Hero = () => {
    return (
         <div style={{ display: 'block'}} className=" mb-3 overflow-hidden rounded">
            <Carousel>
                <Carousel.Item interval={2500} style={{ height: 400}}>
                    <img
                        className="d-block w-100 h-50"
                        style={{ minHeight: 400}}
                        src="https://mdbootstrap.com/img/new/slides/040.jpg"
                        alt="One"
                    />
                    <Carousel.Caption >
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500} style={{ height: 400}}>
                    <img
                        className="d-block w-100 h-50"
                        style={{ minHeight: 400}}
                        src="https://mdbootstrap.com/img/new/slides/042.jpg"
                        alt="Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500} style={{ height: 400}}>
                    <img
                        className="d-block w-100 h-50"
                        style={{ minHeight: 400}}
                        src="https://mdbootstrap.com/img/new/slides/043.jpg"
                        alt="Three"
                    />
                    <Carousel.Caption>
                        <h3>Label for third slide</h3>
                        <p>Sample Text for Image Three</p>
                    </Carousel.Caption>
                </Carousel.Item>
                      <Carousel.Item interval={2500} style={{ height: 400}}>
                    <img
                        className="d-block w-100 h-50"
                        style={{ minHeight: 400}}
                        src="https://mdbootstrap.com/img/new/slides/044.jpg"
                        alt="Four"
                    />
                    <Carousel.Caption>
                        <h3>Label for fourth slide</h3>
                        <p>Sample Text for Image Four</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </div>  
     )
} 