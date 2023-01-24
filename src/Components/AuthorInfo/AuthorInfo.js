import React from "react";
import profileImg from "../../assets/profile.jpg";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";

const AuthorInfo = () => {
  return (
    <div className="flex justify-center items-center px-5 py-5">
      <div className="flex flex-col items-center justihreffy-center bg-slate-300   p-5 w-[400px] min-h-300px rounded">
        <img src={profileImg} alt="" className="w-[300px] rounded-full" />
        <h2 className="text-2xl font-semibold">Emon Howlader</h2>
        <p className="text-xl">Govt. BM College, Barisal</p>
        <p className="py-1 ">Department of Management</p>
        <div className="flex justify-center items-center space-x-2 text-xl ">
          <a
            href="https://www.facebook.com/coderemon.me/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://m.me/coderemon.me" target="_blank" rel="noreferrer">
            <FaFacebookMessenger></FaFacebookMessenger>
          </a>
          <a
            href="https://wa.me/8801798293884"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsappSquare></FaWhatsappSquare>
          </a>

          <a href="https://t.me/coderemon" target="_blank" rel="noreferrer">
            <FaTelegram></FaTelegram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
