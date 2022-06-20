import React from "react"
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const TracksCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} autoplay>
      <div className="item-slide">
        <img src="tracks1.jpg" height={600}  alt="1" style={{width: '100%', objectFit: 'cover'}}/>
      </div>
      <div>
        <img src="tracks2.jpg" height={600}  alt="1" style={{width: '100%', objectFit: 'cover'}}/>
      </div>
      <div>
      <img src="tracks3.jpg" height={600}  alt="1" style={{width: '100%', objectFit: 'cover'}}/>
      </div>
    </Carousel>
  );
};

export default TracksCarousel;