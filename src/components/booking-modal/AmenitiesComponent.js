import { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { EllipseFilled } from "../icons/EllipseFilled";

const AmentiesComponent = () => {
  const [showNotes, setShowNotes] = useState(false);
  const amenities = ["Refreshments", "Smart TV", "Whiteboard"];

  return (
    <div className="w-full">
      <p className="mb-2 text-base text-black-2 font-bold">Amenities</p>
      <div className="flex flex-row gap-3">
        {amenities.map((amenity, index) => {
          if (index == amenities.length - 1) {
            return (
              <span key={index} className="text-gray-2 font-medium">
                {amenity}
              </span>
            );
          }
          return (
            <span
              key={index}
              className="text-gray-2 font-medium flex items-center gap-3"
            >
              {amenity} <EllipseFilled />
            </span>
          );
        })}
      </div>
      <Button
        type="text"
        className="flex items-center text-blue-1 flex gap-2 font-medium pl-0"
        onClick={() => setShowNotes(!showNotes)}
      >
        <PlusCircleOutlined />
        <p>{"Catering & other options"}</p>
      </Button>
    </div>
  );
};

export default AmentiesComponent;
