import React from "react";
import UserDetails from "../components/UserDetails";
import { IoMdClose } from "react-icons/io";

const Usermenumobile = () => {
  const handleback = () => {
    window.history.back();
  };

  return (
    <div className=" w-full">
      <div className="w-full justify-end flex p-3" onClick={handleback}>
        <IoMdClose size={25} />
      </div>
      <div className="w-full">
        <UserDetails />
      </div>
    </div>
  );
};

export default Usermenumobile;
