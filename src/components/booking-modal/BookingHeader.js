import Title from "antd/es/typography/Title";
import { LocationOutlined } from "../icons/LocationOutlined";

const BookingHeader = ({ location }) => {
  return (
    <div>
      <Title level={3} className="mb-1">
        Event Space
      </Title>
      <div className="flex items-center gap-1">
        <LocationOutlined />
        <p className="text-gray-5 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default BookingHeader;
