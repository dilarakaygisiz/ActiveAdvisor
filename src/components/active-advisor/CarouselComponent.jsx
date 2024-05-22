import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.css'

function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src="https://media.istockphoto.com/id/1142581601/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%99%E0%B9%83%E0%B8%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%81%E0%B9%8D%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A2-acroyoga-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%AA%E0%B8%A1%E0%B8%94%E0%B8%B8%E0%B8%A5.jpg?s=170667a&w=0&k=20&c=Np3LdhJPFeBp9rBs0dd-SQiqvHKEAgjwRdvHFanGz6s="
            alt=""
            style={{  width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Weekly AcroYoga Classes For Everyone at Beach Park!</h3>
            <p>
              

            Acroyoga combines strength training (like push-ups and handstands), flexibility exercises (best with a partner), and technique mastery (including bone stacking) under expert guidance.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://t3.ftcdn.net/jpg/01/06/34/58/360_F_106345879_p2K1b549RgdKdxbNH41DsI2VHsn4TwR8.jpg"
            alt=""
            style={{  width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Beach Volleyball at Sunset View</h3>
            <p>Experience Beach Volleyball at Sunset View! Enjoy a game against the beautiful sunset backdrop, perfect for all skill levels. Come for the sport, stay for the scenery and socializing. Everyone's welcome!






</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carouselImg"
            src="https://www.sail.ca/blog/app/uploads/2022/04/Inflatable-or-Hard-How-to-Choose-a-Paddle-Board.jpg"
            alt=""
            style={{  width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Sup Club</h3>
            <p>
            Join us for a Stand-Up Paddleboarding (SUP) adventure! Perfect for all levels, this event offers a fantastic way to explore the water and enjoy the outdoors. Whether you're a beginner or an experienced paddler, come paddle with us and make some waves!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
