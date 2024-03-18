import { useState } from "react";
import { Button, Col, Row } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { LocationOutlined } from "@/components/icons/LocationOutlined";
import BookingModal from "./booking-modal/BookingModal";

const RoomTile = (props) => {
  const {
    id,
    name,
    location,
    room_status,
    occupy_category,
    occupy_from,
    occupy_to,
    price,
    capacity,
    next_availability,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isOccupied = room_status === "occupied";

  const extractTimeFromDate = (date) => {
    return dayjs(date).format("hh:mma");
  };

  const availabilitySchedule = isOccupied
    ? `Next available from ${extractTimeFromDate(next_availability)}`
    : `${occupy_category} (${extractTimeFromDate(
        occupy_from
      )} - ${extractTimeFromDate(occupy_to)})`;

  return (
    <Row key={id} className="bg-white w-full flex flex-1 rounded">
      <Col className="p-2 max-w-[129px]">
        <img
          className={`w-full h-full ${isOccupied ? "opacity-50" : ""}`}
          src="/images/rooms/room01.png"
        ></img>
      </Col>
      <Col className="flex flex-1 justify-between flex-col w-full pl-2 pr-4 py-4 ">
        <Row className="flex flex-col mb-2">
          <Row className="flex justify-between mb-2">
            <div>
              <span className="font-bold text-base capitalize">{name}</span>
            </div>
            <div
              className={`rounded-lg px-2 py-[6px] ${
                isOccupied ? "text-red-1 bg-red-2" : "text-green-1 bg-green-2"
              }`}
            >
              <span className="capitalize">{room_status}</span>
            </div>
          </Row>
          <Col
            className={`flex flex-row gap-1 items-center mb-2 ${
              isOccupied ? "text-blue-1" : "text-gray-1"
            }`}
          >
            <ClockCircleOutlined className="" />
            <p className="font-medium ">{availabilitySchedule}</p>
          </Col>
          <Col className="flex flex-row gap-1 items-center">
            <LocationOutlined />
            <p className="font-medium text-gray-1">{location}</p>
          </Col>
        </Row>
        <Row className="flex justify-between items-center">
          <div className="flex flex-row">
            <span className="font-medium text-gray-3">
              <span
                className={`font-bold ${
                  isOccupied ? "text-gray-5" : "text-blue-1"
                }`}
              >
                ${price}
              </span>{" "}
              per hour
            </span>
            <span className="mx-2">|</span>
            <div>
              <UserOutlined className="mr-1 text-gray-2" />{" "}
              <span
                className={`font-bold ${
                  isOccupied ? "text-gray-5" : "text-blue-1"
                }`}
              >
                {capacity}
              </span>
            </div>
          </div>

          <div>
            <Button
              disabled={isOccupied}
              type="primary"
              onClick={() => setIsModalOpen(true)}
            >
              Book
            </Button>
          </div>
        </Row>
      </Col>
      <BookingModal
        {...props}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </Row>
  );
};

export default RoomTile;
