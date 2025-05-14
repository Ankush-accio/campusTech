import React, { useState } from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import lineYellow from "../assets/lineYellow.png"

const images = [c1, c2, c3, c4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-y-hidden h-[80vh] mx-auto mt-10 ">
      {/* Image */}
      <div className="overflow-hidden w-full rounded-2xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[75vh] object-cover transition duration-700"
        />
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
   <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" src={lineYellow} alt="" />

    </div>
  );
};

export default Carousel;
