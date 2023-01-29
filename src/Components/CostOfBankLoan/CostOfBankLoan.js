import React, { useState } from "react";

const CostOfBankLoan = () => {
  const [loan, setLoan] = useState();
  const [int_p, setInt_p] = useState();
  const [cb_p, setCb_p] = useState();
  const [int_a, setInt_a] = useState();
  const [cb_a, setCb_a] = useState();
  const [mp, setMp] = useState();
  const [d_basis, setD_basis] = useState(false);
  const [cb_basis, setCb_basis] = useState(false);

  //   const mpDays = mp || 360;

  const r = int_a / (loan - (d_basis && int_a) - (cb_basis && cb_a));
  const n = 360 / mp;
  const getApr = () => {
    const apr = mp < 360 ? r * n * 100 : r * 100;
    const twoDecimalApr = apr.toFixed(2);
    console.log(twoDecimalApr);
    if (twoDecimalApr == Infinity) {
      return 0;
    }
    return twoDecimalApr;
  };
  const getEir = () => {
    const eir = (Math.pow(1 + r, n) - 1) * 100;
    const twoDecimalEir = eir.toFixed(2);
    if (twoDecimalEir == Infinity) {
      return 0;
    }
    console.log(twoDecimalEir);
    return twoDecimalEir;
  };
  const handleLoanChange = (e) => {
    setLoan(e.target.value);
  };
  const handleInt_pChange = (e) => {
    setInt_p(e.target.value);
    const n_int_a = loan * (int_p / 100);
    setInt_a(n_int_a);
  };
  const handleCb_pChange = (e) => {
    setCb_p(e.target.value);
    const n_cb_a = loan * (cb_p / 100);
    setCb_a(n_cb_a);
  };
  const handleInt_aChange = (e) => {
    setInt_a(e.target.value);
  };
  const handleCb_aChange = (e) => {
    setCb_a(e.target.value);
  };
  const handleMpChange = (e) => {
    setMp(e.target.value);
  };
  const sup = (
    <>
      <sup>{n ? n.toFixed(2) : "n"}</sup>
    </>
  );
  return (
    <div className="flex justify-center items-center px-5">
      <div className="flex flex-col w-full md:w-[400px] bg-gray-800 rounded shadow-white min-h-[350px] p-5">
        <h2 className="text-center text-2xl font-bold text-white">
          Cost of Bank Loan
        </h2>
        <form>
          <div className="flex space-x-3 ">
            <div className="w-[50%] flex items-center justify-center">
              <label htmlFor="d_basis" className="w-full text-white text-sm">
                Dicount Basis
              </label>
              <input
                type="checkbox"
                id="d_basis"
                className="w-full outline-none  bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                required
                onClick={() => setD_basis(!d_basis)}
              />
            </div>
            <div className="w-[50%] flex justify-center items-center">
              <label htmlFor="cb_basis" className="w-full text-white text-sm">
                CB / Reserve
              </label>
              <input
                type="checkbox"
                placeholder="Interest Percentage"
                id="cb_basis"
                className="w-full outline-none floc  bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onClick={() => setCb_basis(!cb_basis)}
              />
            </div>
          </div>
          <div className="flex space-x-3 mb-3">
            <div className="w-[50%]">
              <label htmlFor="loan" className="w-full text-white text-sm">
                Loan Amount
              </label>
              <input
                type="number"
                placeholder="Loan Amount"
                id="loan"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                required
                onChange={handleLoanChange}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="int_p" className="w-full text-white text-sm">
                Interest Percentage
              </label>
              <input
                type="number"
                placeholder="Interest Percentage"
                id="int_p"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleInt_pChange}
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="w-[50%]">
              <label htmlFor="cb_p" className="w-full text-white text-sm">
                CB Percentage
              </label>
              <input
                type="number"
                placeholder="CB Percentage"
                id="cb_p"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleCb_pChange}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="int_a" className="w-full text-white text-sm">
                Interest Amount
              </label>
              <input
                type="number"
                placeholder="Interest Amount"
                id="int_a"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleInt_aChange}
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="w-[50%]">
              <label htmlFor="cb_a" className="w-full text-white text-sm">
                CB Amount
              </label>
              <input
                type="number"
                placeholder="CB Amount"
                id="cb_a"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleCb_aChange}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="mp" className="w-full text-white text-sm">
                MP (Days)
              </label>
              <input
                type="number"
                placeholder="Interest Amount"
                id="mp"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleMpChange}
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
              APR = {getApr()}%
            </h2>
            <h2 className="text-2xl text-semibold text-white">
              EIR = {getEir()}%
            </h2>
          </div>
          <h2 className="text-white">Here,</h2>
          <div className="flex justify-evenly items-center">
            <h2 className="text-2xl text-semibold text-white">
              r = {r == 0 ? "0" : r.toFixed(5)}
            </h2>
            <h2 className="text-2xl text-semibold text-white">
              n = {n == Infinity ? "0" : n.toFixed(2)}
            </h2>
          </div>
        </div>
        {loan ? (
          <>
            {" "}
            <h2 className="text-3xl font-bold text-center text-white my-1">
              Solving Formula
            </h2>
            <div className="flex flex-col items-start">
              <div className="flex justify-center items-center space-x-2 text-white">
                <div>APR=</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="pb-1">Int</span>
                  <span></span>
                  <span className="border-t border-blue-50">
                    Loan - Int - CB
                  </span>
                </div>
                <div>x</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="pb-1">360</span>
                  <span></span>
                  <span className="border-t border-blue-50">MP</span>
                </div>
                <div>x</div>
                <div>100</div>
              </div>
              <div className="flex justify-center items-center space-x-2 ml-[8%] text-white">
                <div> =</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="pb-1">{int_a}</span>
                  <span></span>
                  <span className="border-t border-blue-50">
                    {loan} {d_basis && "-"} {d_basis && int_a} {cb_basis && "-"}
                    {cb_basis && cb_a}
                  </span>
                </div>
                <div>x</div>
                <div className="flex flex-col justify-center items-center">
                  <span className="pb-1">360</span>
                  <span></span>
                  <span className="border-t border-blue-50">{mp}</span>
                </div>
                <div>x</div>
                <div>100</div>
              </div>
              <div className="text-white">
                {" "}
                <h2 className="w-[400px]  ml-[7%]  "> = {getApr()}%</h2>
              </div>
            </div>
            <div className="flex flex-col items-start text-white mt-7">
              <div className="flex justify-center e">
                <div>
                  EIR ={`{`}(1 + r) {sup} - 1{`}`} x 100
                </div>
              </div>
              <div className="flex justify-center ml-[8%]">
                <div>
                  ={`{`}(1 + {r ? r.toFixed(5) : "r"}) {sup} - 1{`}`} x 100
                </div>
              </div>
              <div className="ml-[8%]"> = {getEir()}%</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CostOfBankLoan;
