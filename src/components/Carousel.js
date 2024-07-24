import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?q=trump&apiKey=25a97abf2ee04e599b845fc42c46ea16')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API Data:', data); // Log the fetched data
        if (data.articles) {
          setItems(data.articles.slice(0, 10)); // Accessing articles array and limiting to first 30 items
        } else {
          console.error('No articles found in the response.');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container slider">
      <Slider {...settings}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="p-2">
              <div className="w-full bg-black p-2 rounded shadow box">
                <img
                  src={item.urlToImage || 'https://via.placeholder.com/150'}
                  alt={item.title}
                  className="w-full h-20 object-cover rounded"
                />
                <h3 className="mt-2 font-normal text-center title">{item.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
