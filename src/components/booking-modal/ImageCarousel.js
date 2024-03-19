import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const ImageCarousel = () => {
  const items = [
    { name: "sub-room-img-1.png" },
    { name: "sub-room-img-2.png" },
    { name: "sub-room-img-3.png" },
    { name: "sub-room-img-4.png" },
    { name: "sub-room-img-5.png" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center w-full relative">
      <Button
        className="absolute left-3"
        icon={<LeftOutlined />}
        onClick={prevSlide}
      />
      <div className="w-full h-full rounded">
        <img
          className="w-full h-full object-fit"
          src={`/images/rooms/room-details/${items[currentIndex].name}`}
          alt=""
        />
      </div>
      <Button
        className="absolute right-3"
        icon={<RightOutlined />}
        onClick={nextSlide}
      />
    </div>
  );
};

export default ImageCarousel;
