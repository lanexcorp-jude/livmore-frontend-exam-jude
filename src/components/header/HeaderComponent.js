import Link from "next/link";
import { Button, Divider } from "antd";
import {
  BarsOutlined,
  BellOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import { CategoryOutlined } from "@/components/icons/CategoryOutlined";
import { OfficeChairFill } from "@/components/icons/OfficeChairFilled";
import { CalendarFilled } from "../icons/CalendarFilled";

const HeaderComponent = () => {
  return (
    <Header className="w-full bg-white p-0 h-auto">
      <div className="px-8 py-3 flex justify-between items-center">
        <div className="pl-[18px]">
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
          <div className="h-full w-full px-[10px]">
            <HeartOutlined className="w-full h-full" />
          </div>
          <div className="h-full w-full px-[10px]">
            <BellOutlined className="w-full h-full" />
          </div>
          <Button icon={<ShoppingCartOutlined className="w-full h-full" />}>
            Cart
          </Button>
          <Button>Sign in</Button>
        </div>
      </div>
      <Divider className="m-0" />
      <div className="px-8 py-3 flex justify-between items-center">
        <div className="flex gap-2 w-full h-full">
          <Button
            className="border-blue-1 bg-blue-2 flex items-center"
            style={{ borderRadius: "100px" }}
            icon={<CalendarFilled />}
          >
            Meeting Room
          </Button>
          <Button
            style={{ borderRadius: "100px" }}
            className="flex items-center"
            icon={<OfficeChairFill className="w-full h-full" />}
          >
            Desk Pass
          </Button>
          <Button style={{ borderRadius: "100px" }}>More</Button>
        </div>
        <div className="flex items-center justify-end gap-4 w-full h-full">
          <Search
            className="max-w-[280px]"
            placeholder="Search room or member..."
            allowClear
          />
          <Button icon={<BarsOutlined className="w-full h-full" />} />
          <Button icon={<CategoryOutlined className="w-full h-full" />} />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
