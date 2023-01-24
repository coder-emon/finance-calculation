import React, { useState } from "react";

const TradeCredit = () => {
  const [cd, setCd] = useState();
  const [cp, setCp] = useState();
  const [dp, setDp] = useState();
  const [year, setYear] = useState();
  const yearDays = year || 360;
  const r = cd / (100 - cd);
  const n = yearDays / (cp - dp);
  const getApr = () => {
    const apr = r * n * 100;
    const twoDecimalApr = apr.toFixed(2);
    return twoDecimalApr;
  };
  const getEir = () => {
    const eir = (Math.pow(1 + r, n) - 1) * 100;
    const twoDecimalEir = eir.toFixed(2);
    return twoDecimalEir;
  };
  const handleCdChange = (e) => {
    setCd(e.target.value);
  };
  const handleCpChange = (e) => {
    setCp(e.target.value);
  };
  const handleDpChange = (e) => {
    setDp(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <div className="flex justify-center items-center px-5">
      <div className="flex flex-col w-full md:w-[400px] bg-gray-800 rounded shadow-white min-h-[400px] p-5">
        <h2 className="text-center text-3xl font-bold text-white">
          Cost of Trade Credit
        </h2>
        <form>
          <div className="flex space-x-3 mb-3">
            <div className="w-[50%]">
              <label htmlFor="cd" className="w-full text-white text-sm">
                CD - Cash Discount
              </label>
              <input
                type="number"
                placeholder="CD - Cash Discount"
                id="cd"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                required
                onChange={handleCdChange}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="cp" className="w-full text-white text-sm">
                CP - Credit Period
              </label>
              <input
                type="number"
                placeholder="CP - Credit Period"
                id="cp"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                required
                onChange={handleCpChange}
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="w-[50%]">
              <label htmlFor="cd" className="w-full text-white text-sm">
                DP - Discount Period
              </label>
              <input
                type="number"
                placeholder="DP - Discount Period"
                id="dp"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                required
                onChange={handleDpChange}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="year" className="w-full text-white text-sm">
                Days of Year (if given)
              </label>
              <input
                type="number"
                placeholder="Days of Year "
                id="year"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                required
                onChange={handleYearChange}
              />
            </div>
          </div>
        </form>
        <div>
          <h2 className="text-3xl font-bold text-center text-white my-1">
            Result
          </h2>
          <div className="flex justify-evenly items-center">
            <h2 className="text-2xl text-semibold text-white">
              APR ={getApr()}
            </h2>
            <h2 className="text-2xl text-semibold text-white">
              EIR = {getEir()}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeCredit;
