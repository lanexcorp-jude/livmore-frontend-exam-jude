import { useCallback, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Flex,
  Modal,
  Row,
  Segmented,
  Select,
  TimePicker,
  Grid,
} from "antd";
import dayjs from "dayjs";
import {
  MinusOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AmentiesComponent from "./AmenitiesComponent";
import BookingHeader from "./BookingHeader";
import PaymentDetails from "./PaymentDetails";
import ImageCarousel from "./ImageCarousel";

const { RangePicker } = TimePicker;

const BookingModal = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [quantity, setQuantity] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const isMobile = screens.lg === false;

  const addQuantity = useCallback(() => setQuantity(quantity + 1), [quantity]);
  const subtractQuantity = useCallback(
    () => setQuantity(quantity - 1),
    [quantity]
  );

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const modalStyles = {
    content: {
      borderRadius: 8,
      padding: "16px 20px",
    },
  };

  const roomImages = [
    { name: "sub-room-img-1.png" },
    { name: "sub-room-img-2.png" },
    { name: "sub-room-img-3.png" },
    { name: "sub-room-img-4.png" },
    { name: "sub-room-img-5.png" },
  ];

  const pricing = [
    {
      label: "All day",
      value: 40,
      type: "day",
    },
    {
      label: "Half day",
      value: 20,
      type: "day",
    },
    {
      label: "Hourly",
      value: 10,
      type: "hour",
    },
  ];

  return (
    <Modal
      title={<BookingHeader location={props.location} />}
      onCancel={handleClose}
      open={isModalOpen}
      footer={null}
      styles={modalStyles}
      width={isMobile ? "100%" : 1000}
      centered={false}
    >
      <Row className="mt-4">
        {isMobile ? (
          <div className="mb-4 w-full h-full">
            <ImageCarousel />
          </div>
        ) : (
          <Col className="hidden lg:block lg:pr-2" span={12}>
            <div>
              <div className="mb-[6px] rounded">
                <img
                  className="w-full h-full"
                  src="/images/rooms/room-details/main-room-img.png"
                />
              </div>
              <div>
                <Flex gap="0 4px">
                  {roomImages.map((image, idx) => {
                    return (
                      <div key={idx} className="rounded w-full h-full">
                        <img
                          className="w-full h-full"
                          src={`/images/rooms/room-details/${image.name}`}
                        />
                      </div>
                    );
                  })}
                </Flex>
              </div>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-base text-black-2 font-bold">
                Desription
              </p>
              <p className="mb-2 text-gray-2 font-medium">
                One of our standout spaces is our spacious and well-lit room,
                designed to cater to teams or individuals who require a private
                and productive workspace. This room is equipped with comfortable
                chairs, adjustable desks, high-speed internet, and plenty of
                power...
              </p>
              <Button type="text" className="px-0 text-blue-1 font-medium">
                Show more
              </Button>
            </div>
            <Divider dashed className="mt-2 mb-5" />
            <div className="w-full">
              <p className="mb-2 text-base text-black-2 font-bold">Pricing</p>
              <div className="w-full flex items-center justify-between">
                {pricing.map((price, index) => {
                  return (
                    <p className="text-gray-2 font-medium" key={index}>
                      {price.label}:{" "}
                      <span
                        key={index}
                        className="text-blue-1 text-base font-bold"
                      >
                        ${price.value}
                      </span>
                      /{price.type}
                    </p>
                  );
                })}
              </div>
            </div>
            <Divider dashed className="mt-2 mb-5" />
            <AmentiesComponent />
          </Col>
        )}
        <Col className="lg:pl-2" span={24} lg={12}>
          <div className="p-4 bg-gray-0 rounded-lg lg:h-full relative">
            <Row className="mb-4 relative">
              <p className="text-xl font-bold">Booking Details</p>
            </Row>
            <Row className="flex gap-4 relative">
              <Col span={24}>
                <Segmented
                  options={["Hourly", "All day", "Half day"]}
                  onChange={(value) => {
                    console.log(value); // string
                  }}
                  size="large"
                  style={{
                    backgroundColor: "rgba(3, 6, 32, 0.04)",
                  }}
                />
              </Col>
              <Col span={24}>
                <Select
                  defaultValue={"North Strathfield"}
                  className="w-full"
                  size="large"
                  options={[
                    { value: "North Strathfield", label: "North Strathfield" },
                  ]}
                />
              </Col>
              <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="flex-1">
                  <DatePicker
                    className="w-full"
                    size="large"
                    defaultValue={dayjs()}
                  />
                </div>
                <div className="flex-1">
                  <RangePicker
                    className="w-full"
                    size="large"
                    use12Hours
                    format="h:mm a"
                    defaultValue={[dayjs(), dayjs().add(1, "hour")]}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full pb-2 border-b border-dashed border-gray-7">
                <div>
                  <p className="font-medium">Quantity</p>
                </div>
                <div className="flex flex-row justify-end w-full">
                  <Button
                    className="bg-gray-6 border-none"
                    icon={<MinusOutlined />}
                    onClick={subtractQuantity}
                  />
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-base font-bold text-black-2">
                      {quantity}
                    </span>
                  </div>
                  <Button
                    className="bg-gray-6 border-none"
                    icon={<PlusOutlined />}
                    onClick={addQuantity}
                  />
                </div>
              </div>
              <Button
                type="text"
                className="flex items-center text-blue-1 flex gap-2 font-medium pl-0"
                onClick={() => setShowNotes(!showNotes)}
              >
                <PlusCircleOutlined />
                <p>Booking Notes</p>
              </Button>
              <div className="w-full">
                <TextArea
                  className={`${showNotes ? "block" : "hidden"}`}
                  rows={2}
                  placeholder="Add note here..."
                />
              </div>
            </Row>
            {isMobile ? <></> : <PaymentDetails />}
          </div>
          {isMobile ? (
            <div className="mt-4">
              <div className="mb-10">
                <AmentiesComponent />
              </div>
              <div className="dropshadow border-solid">
                <PaymentDetails />
              </div>
            </div>
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Modal>
  );
};

export default BookingModal;
