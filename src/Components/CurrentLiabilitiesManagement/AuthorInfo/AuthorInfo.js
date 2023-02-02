import React from "react";
import profileImg from "../../../assets/profile.jpg";
import financeImg from "../../../assets/Finance.png";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";
import MetaDecorator from "../MetaDecorator/MetaDecorator";

const AuthorInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-black mt-5">
        Developer Info
      </h2>
      <div className="flex justify-center items-center px-5 py-5">
        <MetaDecorator
          title={"Finance Calculation by Coder Emon"}
          description="This web appliaction is develop for provide finance calcuation services"
          imageUrl={financeImg}
          imageAlt="Finance Calculation"
        ></MetaDecorator>

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
            <a
              href="https://m.me/coderemon.me"
              target="_blank"
              rel="noreferrer"
            >
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
    </div>
  );
};

export default AuthorInfo;
