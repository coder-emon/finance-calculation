import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const CurrentLiabilitiesMgtNav = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center relative md:w-[400px] mx-auto ">
      <div className="flex justify-start  w-full md:w-[400px] pl-4 ">
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
        <ul className="flex flex-col justify-center items-center bg-slate-300 p-3 rounded shadow-md space-y-2 mb-2 text-xs absolute top-12 left-6">
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/">Cost of Trade Credit</Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/besttradecredit">Best Cost of Trade Credit</Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/amounttobepaid">Amount to be paid</Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/costofbankloan">Cost of Bank Loan</Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/bestcostofbankloan">Best Cost of Bank Loan</Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/costofbankloaninstalment">
              Cost of Bank Loan Installment
            </Link>
          </li>
          <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
            <Link to="/costofbankloanrc">
              Cost of Bank Loan R.C
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default CurrentLiabilitiesMgtNav;
