import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Row, Tag } from "antd";
import { useState } from "react";

const PaymentDetails = () => {
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  return (
    <div className="lg:absolute lg:bottom-4 w-full lg:pr-8">
      <Row className="rounded-lg py-2 px-3 bg-white">
        <Button
          onClick={() => setShowPaymentDetails(!showPaymentDetails)}
          type="text"
          className="px-2 w-full text-blue-1"
        >
          <div className="w-full flex flex-row justify-between items-center">
            <p>Details amount</p>
            {showPaymentDetails ? <UpOutlined /> : <DownOutlined />}
          </div>
        </Button>
        <div
          className={`w-full px-2 flex flex-col gap-2 mt-2 ${
            showPaymentDetails ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center text-gray-2 font-medium">
            <p>Subtotal</p>
            <p>{"$100.00"}</p>
          </div>
          <div className="flex justify-between items-center text-gray-2 font-medium">
            <p>{"Discount (50%)"}</p>
            <p>{"-$50.00"}</p>
          </div>
          <div className="flex justify-between items-center text-gray-2 font-medium">
            <p>{"Credit (1h)"}</p>
            <p>{"-$5.00"}</p>
          </div>
        </div>
        <Divider className="my-2" />
        <div className="w-full px-2">
          <div className="flex justify-between items-center text-gray-2 font-medium">
            <Flex wrap="wrap" gap="0 8px">
              <p>{"GST(10%)"}</p>
              <Tag className="text-xs flex items-center" color="default">
                Inclusive
              </Tag>
            </Flex>
            <p>{"$4.55"}</p>
          </div>
          <div className="flex justify-between items-center text-black font-bold text-xl">
            <p>Total</p>
            <p>{"$44.55"}</p>
          </div>
        </div>
      </Row>
      <Row className="bg-white mt-3">
        <Button className="rounded-lg h-10 w-full text-base" type="primary">
          Add to Cart
        </Button>
      </Row>
    </div>
  );
};

export default PaymentDetails;
