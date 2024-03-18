"use client";
import { useState } from "react";
import { CreditCardOutlined } from "@ant-design/icons";
import {
  Radio,
  Segmented,
  Col,
  Row,
  Select,
  DatePicker,
  TimePicker,
} from "antd";
import dayjs from "dayjs";

const { Group: RadioGroup } = Radio;
const { RangePicker } = TimePicker;

const SchedulerForm = () => {
  const [value, setValue] = useState("AM");
  const [type, setType] = useState("Hourly");
  const [timeDiff, setTimeDiff] = useState(2);

  const options = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" },
  ];

  return (
    <div className="p-3 bg-white rounded-md">
      <Col className="flex flex-col gap-4">
        <Row className="flex justify-between">
          <div className="flex gap-4">
            <Segmented
              options={["Hourly", "All day", "Half day"]}
              onChange={(value) => setType(value)}
              size="large"
              value={type}
            />
            {type === "Half day" ? (
              <RadioGroup
                className="h-10 hidden lg:block"
                options={options}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                optionType="button"
                size="large"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="rounded-lg px-2 py-[10px] bg-gray-0">
              <CreditCardOutlined className="mr-1 font-bold text-blue-1" />
              <span className="font-bold">{`${timeDiff} hr${
                timeDiff > 1 ? "s" : ""
              }`}</span>
            </div>
          </div>
        </Row>
        <Row className="gap-4 xl:gap-0 flex w-full">
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
              <Select
                defaultValue={"North Strathfield"}
                className="w-full"
                size="large"
                options={[
                  { value: "North Strathfield", label: "North Strathfield" },
                ]}
              />
            </div>
            <div className="flex flex-row gap-4 w-full lg:w-1/2 ">
              <div className="w-1/3">
                <DatePicker
                  className="w-full"
                  size="large"
                  defaultValue={dayjs()}
                />
              </div>
              <div className="w-2/3">
                <RangePicker
                  disabled={type !== "Hourly"}
                  className="w-full"
                  size="large"
                  use12Hours
                  format="h:mm a"
                  defaultValue={[dayjs(), dayjs().add(2, "hour")]}
                  onChange={(dates) => {
                    const diff = dayjs(dates[1]).diff(dates[0], "h");
                    setTimeDiff(diff);
                  }}
                />
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default SchedulerForm;
