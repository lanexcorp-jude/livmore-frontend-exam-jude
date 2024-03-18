import { MailFilled } from "@ant-design/icons";
import { TelephoneFilled } from "./icons/TelephoneFilled";
import { WebsiteFilled } from "./icons/WebsiteFilled";

const BuildingDetails = () => {
  return (
    <div className="p-3 bg-white rounded-md relative">
      <div
        className="w-full h-screen bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/images/sample-map.png)",
        }}
      >
        <div className="bg-white px-5 pt-4 pb-6 w-full flex justify-between">
          <div>
            <div className="mb-5">
              <p className="text-base font-bold text-black-1">
                Bondi Junction, Sydney NSW
              </p>
              <p className="text-gray-4 font-medium">
                33 Bondi Road, Bondi Junction NSW 2000
              </p>
            </div>
            <div className="mb-5">
              <p className="text-base font-bold text-black-1">Open hours</p>
              <p className="text-black-1 font-medium">Mon to Fri 9am - 6pm</p>
              <p className="text-black-1 font-medium">
                After hours bookings{" "}
                <a href="#" className="text-blue-1 font-bold">
                  Request here
                </a>
              </p>
            </div>
            <div>
              <div className="flex flex-row gap items-center mb-4">
                <TelephoneFilled />
                <p className="ml-5 text-blue-1 font-medium">+61 02 924 577</p>
              </div>
              <div className="flex flex-row gap items-center mb-4">
                <MailFilled />
                <p className="ml-5 text-blue-1 font-medium">
                  reception@space.com
                </p>
              </div>
              <div className="flex flex-row gap items-center">
                <WebsiteFilled />
                <p className="ml-5 text-blue-1 font-medium">www.space.com</p>
              </div>
            </div>
          </div>
          <div className="w-[158px] h-[244px]">
            <img className="w-full h-full" src="/images/rooms/img-place.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetails;
