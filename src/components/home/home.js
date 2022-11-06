import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import "./style.css";
function Home() {
  return (
    <div>
        <h1 className='h1home'>Strona główna</h1>
        <div className='crsl'>
        <Carousel className='d-flex align-items-stretch w-50 m-auto   '>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {require("./images/DSC00379.JPG")}
                alt="First slide"
              />
              <Carousel.Caption className='text-decoration-none'>
                <i class="bi bi-arrow-clockwise"></i>
                <h2 className='title-app text-decoration-none'><Link className='link' to='/buttonusers'>Button users</Link></h2>
                <h4 className='descript'>Przycisk wyświetlajacy liste oraz odświeżanie nowej listy</h4>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/DSC00310.JPG")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <i class="bi bi-person-lines-fill"></i>
                <h2 className='title-app'><Link className='link' to='/Form'>Form</Link></h2>
                <h4 className='descript'>Formularz kontaktowy</h4>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/DSC00350.JPG")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <i class="bi bi-stopwatch"></i>
                <h2 className='title-app'><Link className='link' to='/Stoper'>Stoper</Link></h2>
                <h4 className='descript'>aplikacja - Stoper</h4>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
          

        </div>
    </div>
  )
}

export default Home;