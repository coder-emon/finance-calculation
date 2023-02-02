import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
    const [displayNav, setDisplayNav] = useState(false);

    return (
        <div className="flex  justify-between items-center md:w-[400px] mx-auto relative px-4 py-2">
            <div>
                <h1 className="text-2xl font-bold text-blue-500 text-left mt-1">
                    Finance Calculation
                </h1>

            </div>
            <div className="flex items-center ">
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
                <ul className="flex flex-col justify-center items-center bg-slate-300 p-3 rounded shadow-md space-y-2 mb-2 text-xs absolute top-28 right-6">
                    <li className="bg-blue-500 px-2 py-1 w-full rounded text-white text-center">
                        <Link to="/currentliabilities">Current Liabilities Management</Link>
                    </li>
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};

export default Nav;
