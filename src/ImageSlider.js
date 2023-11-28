import React, { useState, useEffect } from 'react';

export default function ImageSlider() {
  const instaPhoto = [
    { id: 1, url: '/insta/insta_1.jpeg' },
    { id: 2, url: '/insta/insta_2.jpeg' },
    { id: 3, url: '/insta/insta_3.jpeg' },
    { id: 4, url: '/insta/insta_4.jpeg' },
    { id: 5, url: '/insta/insta_5.jpeg' },
    { id: 6, url: '/insta/insta_6.jpeg' },
    { id: 7, url: '/insta/insta_7.jpeg' }, 
    { id: 8, url: '/insta/insta_8.jpeg' },
    { id: 9, url: '/insta/insta_9.jpeg' },
    { id: 10, url: '/insta/insta_10.jpeg' },
    { id: 11, url: '/insta/insta_11.jpeg' },
    { id: 12, url: '/insta/insta_12.jpeg' },
    { id: 13, url: '/insta/insta_13.jpeg' },
    { id: 14, url: '/insta/insta_14.jpeg' },
    { id: 15, url: '/insta/insta_15.jpeg' },
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === instaPhoto.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change the duration (in milliseconds) for image transition

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [instaPhoto.length]);

  return (
    <div className="relative max-w-screen-2xl mx-auto bg-white h-72 overflow-hidden">
      <div
        className="relative h-full flex"
        style={{
          transform: `translateX(-${currentPhotoIndex * 288}px)`, // Adjust based on image width
          transition: 'transform 0.5s ease-in-out', // Adjust transition duration if needed
        }}
      >
        {[...instaPhoto, ...instaPhoto].map((photo, index) => (
          <img
            key={photo.id + index}
            src={photo.url}
            alt={`Instagram ${index + 1}`}
            className="object-cover"
            height="288"
            width="288"
          />
        ))}
      </div>
    </div>
  );
}


