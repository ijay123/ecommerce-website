import { CiMobile4, CiHeadphones } from "react-icons/ci";
import { MdComputer } from "react-icons/md";
import { TbDeviceWatchStats } from "react-icons/tb";
import { AiOutlineCamera } from "react-icons/ai";
import { CgGames } from "react-icons/cg";

export const categories = [
  {
    id: 1,
    accessaries: <CiMobile4 />,
    name: "Phones",
  },
  {
    id: 2,
    accessaries: <MdComputer />,
    name: "Computers",
  },
  {
    id: 3,
    accessaries: <TbDeviceWatchStats />,
    name: "SmartWatch",
  },
  {
    id: 4,
    accessaries: <AiOutlineCamera />,
    name: "Camera",
  },
  {
    id: 5,
    accessaries: <CiHeadphones />,
    name: "HeadPhones",
  },
  {
    id: 6,
    accessaries: <CgGames />,
    name: "Gaming",
  },
];
