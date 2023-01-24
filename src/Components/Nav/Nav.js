import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-500 text-center mt-1">
        Finance Calculation
      </h1>
      <p className="text-sm text-blue-600 font-semibold text-center mb-1">
        This application is build for finance calculation{" "}
      </p>
      <div>
        <button
          className="text-3xl "
          onClick={() => {
            setDisplayNav(!displayNav);
          }}
        >
          {displayNav ? <RxCross2></RxCross2> : <FiMenu></FiMenu>}
        </button>
      </div>
      {displayNav ? (
        <ul className="flex flex-col justify-center items-center space-y-2 mb-2 text-sm">
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/">Cost of Trade Credit</Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/besttradecredit">Best Cost of Trade Credit</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
