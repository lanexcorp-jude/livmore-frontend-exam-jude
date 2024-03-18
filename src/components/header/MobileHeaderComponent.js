import {
  BellOutlined,
  CalendarOutlined,
  CreditCardFilled,
  CreditCardOutlined,
  DownOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { OfficeChairFill } from "@/components/icons/OfficeChairFilled";
import { MapOutlined } from "../icons/MapOutlined";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Meeting room
      </a>
    ),
    icon: <CalendarOutlined />,
  },
  {
    key: "2",
    label: (
      <a
        className="ml-2"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Desk pass
      </a>
    ),
    icon: <OfficeChairFill />,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        More
      </a>
    ),
  },
];

const MobileHeaderComponent = () => {
  return (
    <Header className="w-full bg-white p-0 h-auto">
      <div className="px-5 py-3 flex justify-between items-center">
        <div>
          <Link
            href={"/"}
            className="flex flex-1 content-center items-center max-w-[124px] max-h-8"
          >
            <img
              src={"/images/hamlet-logo.png"}
              alt="hamlet-logo"
              className={`max-w-[124px] max-h-8`}
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center max-h-8">
          <BellOutlined className="w-full h-full" />
          <MenuOutlined />
        </div>
      </div>
      <div className="px-5 h py-2 flex justify-between items-center">
        <Dropdown menu={{ items }} className="w-full h-9">
          <div className="flex flex-row items-center gap-1">
            <CalendarOutlined className="text-blue-1" />
            <span className="font-medum text-base text-black-3">
              Meeting Room
            </span>
            <DownOutlined className="text-blue-1" />
          </div>
        </Dropdown>
        <div className="flex items-center justify-end gap-4 w-full h-full">
          <div className="h-8 rounded-lg flex items-center px-2 bg-gray-0">
            <CreditCardOutlined className="mr-1 text-blue-1 font-bold" />
            <span className="font-bold">2 hrs</span>
          </div>
          <SearchOutlined />
          <MapOutlined />
        </div>
      </div>
    </Header>
  );
};

export default MobileHeaderComponent;
