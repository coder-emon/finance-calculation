import React, { useState } from "react";
import CurrentLiabilitiesMgtNav from "../CurrentLiabilitiesMgtNav/CurrentLiabilitiesMgtNav";

const BestCostOfBankLoan = () => {
  const [info, setInfo] = useState({
    loan: 0,
    int_p: 0,
    cb_p: 0,
    int_a: 0,
    cb_a: 0,
    mp: 360,
    d_basis: false,
    cb_basis: false,
  });

  const [eirArr, setEirArr] = useState([]);
  const [finalBest, setFinalBest] = useState({});
  const [term, setTerm] = useState();

  const Int_aChange = () => {
    const n_int_a = info.loan && info.loan * (info.int_p && info.int_p / 100);
    setInfo({ ...info, int_a: n_int_a });
    return n_int_a;
  };
  const Cb_aChange = () => {
    const n_cb_a = info.loan && info.loan * (info.cb_p && info.cb_p / 100);
    setInfo({ ...info, cb_a: n_cb_a });
    return n_cb_a;
  };
  const r =
    info.int_a /
    (info.loan -
      (info.d_basis && (info.int_a || Int_aChange())) -
      (info.cb_basis && (info.cb_a || Cb_aChange())));
  const n = 360 / info.mp;
  const getApr = () => {
    const apr = info.mp < 360 ? r * n * 100 : r * 100;
    const twoDecimalApr = apr.toFixed(2);
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

    return twoDecimalEir;
  };

  const handleLoanChange = (e) => {
    setInfo({ ...info, loan: e.target.value });
  };
  const handleInt_pChange = (e) => {
    setInfo({ ...info, int_p: e.target.value });
  };

  const handleCb_pChange = (e) => {
    setInfo({ ...info, cb_p: e.target.value });
  };
  const handleInt_aChange = (e) => {
    setInfo({ ...info, int_a: e.target.value });
  };
  const handleCb_aChange = (e) => {
    setInfo({ ...info, cb_a: e.target.value });
  };
  const handleMpChange = (e) => {
    setInfo({ ...info, mp: e.target.value });
  };
  const handleIntKeyUp = () => {
    setInfo({ ...info, int_a: Int_aChange() });
  };
  const handleCbKeyUp = () => {
    setInfo({ ...info, cb_a: Cb_aChange() });
  };
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  const sup = (
    <>
      <sup>{n ? n.toFixed(2) : "n"}</sup>
    </>
  );
  const addToCompare = (e) => {
    e.preventDefault();

    const termInfo = {
      name: term,
      eirAmount: parseFloat(getEir()),
    };
    const newEirArr = [...eirArr, termInfo];

    setEirArr(newEirArr);
    console.log(eirArr);

    // console.log(bestTradeCredit());
    setInfo({
      loan: 0,
      int_p: 0,
      cb_p: 0,
      int_a: 0,
      cb_a: 0,
      mp: 360,
      d_basis: false,
      cb_basis: false,
    });
    e.target.reset();
  };
  const bestTradeCredit = () => {
    // const numberEir = eirArr.map((n) => n.eirAmount);
    // const bestTermNumber = Math.min.apply(Math, numberEir);
    // const bestTerm = eirArr.find((n) => n.eirAmount === bestTermNumber);
    // console.log(bestTerm);
    // return bestTerm;
    if (eirArr.length > 1) {
      var min = Math.min(...eirArr.map((item) => item.eirAmount));
      const bestTerm = eirArr.find((n) => n.eirAmount === min);
      return bestTerm;
    } else {
      return {};
    }
  };

  console.log(bestTradeCredit());

  return (
    <>
      <CurrentLiabilitiesMgtNav></CurrentLiabilitiesMgtNav>
      <div className="flex justify-center items-center px-5">
        <div className="flex flex-col w-full md:w-[400px] bg-gray-800 rounded shadow-white min-h-[350px] p-5">
          <h2 className="text-center text-2xl font-bold text-white">
            Best Cost of Bank Loan
          </h2>
          <form onSubmit={addToCompare}>
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
                  onKeyUp={handleIntKeyUp}
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
                  onKeyUp={handleCbKeyUp}
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="mp" className="w-full text-white text-sm">
                  MP (Days)
                </label>
                <input
                  type="number"
                  placeholder="Maturity Period"
                  id="mp"
                  defaultValue="360"
                  className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                  onChange={handleMpChange}
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-[50%]">
                <label htmlFor="int_a" className="w-full text-white text-sm">
                  Interest Amount
                </label>
                <input
                  type="number"
                  placeholder="Interest Amount"
                  id="int_a"
                  defaultValue={
                    info.loan && info.loan * (info.int_p && info.int_p / 100)
                  }
                  className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                  onChange={handleInt_aChange}
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="cb_a" className="w-full text-white text-sm">
                  CB Amount
                </label>
                <input
                  type="number"
                  placeholder="CB Amount"
                  id="cb_a"
                  defaultValue={
                    info.loan && info.loan * (info.cb_p && info.cb_p / 100)
                  }
                  className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                  onChange={handleCb_aChange}
                />
              </div>
            </div>
            <div className="flex space-x-3 my-2">
              <div className="w-[50%] flex items-center justify-center">
                <label htmlFor="d_basis" className="w-full text-white text-xs">
                  Dicount Basis
                </label>
                <input
                  type="checkbox"
                  id="d_basis"
                  disabled={
                    info.loan && (info.int_p || info.int_a) ? false : true
                  }
                  className="w-full outline-none  bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                  onClick={(e) =>
                    setInfo({ ...info, d_basis: e.target.checked })
                  }
                />
              </div>
              <div className="w-[50%] flex justify-center items-center">
                <label htmlFor="cb_basis" className="w-full text-white text-xs">
                  CB / Reserve
                </label>
                <input
                  type="checkbox"
                  placeholder="Interest Percentage"
                  id="cb_basis"
                  disabled={
                    info.loan && (info.cb_p || info.cb_a) ? false : true
                  }
                  className="w-full outline-none floc  bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                  onClick={(e) =>
                    setInfo({ ...info, cb_basis: e.target.checked })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-[50%] mx-auto">
                <label htmlFor="project" className="w-full text-white text-sm">
                  Alternative
                </label>
                <input
                  type="text"
                  placeholder="A,B,C or 1,2,3"
                  id="project"
                  className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                  onChange={handleTermChange}
                />
              </div>
              <button
                className="text-sm text-white bg-blue-700 px-2 py-1 rounded my-2 "
                type="submit"
              >
                Add To Compare
              </button>
            </div>
          </form>
          <div>
            <h2 className="text-2xl font-bold text-center text-white my-1">
              Result
            </h2>
            <h2 className="text-center text-indigo-100">
              <span className="text-xl font-semibold">Best Term</span>
              <span> {bestTradeCredit()?.name}</span>
              <span> {bestTradeCredit()?.name ? "Cost:" : ""}</span>
              <span>
                {" "}
                {bestTradeCredit()?.eirAmount}
                {bestTradeCredit()?.eirAmount ? "%" : ""}
              </span>
            </h2>
            <div className="flex flex-col justify-center items-center text-white">
              {eirArr.map((ear, idx) => (
                <p key={idx}>
                  {idx + 1}: {ear.name} Cost:- {ear.eirAmount}%
                </p>
              ))}
            </div>
            <div className="flex justify-evenly items-center">
              <h2 className="text-xl text-semibold text-white">
                APR = {getApr()}%
              </h2>
              <h2 className="text-xl text-semibold text-white">
                EIR = {getEir()}%
              </h2>
            </div>
            <h2 className="text-white">Here,</h2>
            <div className="flex justify-evenly items-center">
              <h2 className="text-xl text-semibold text-white">
                r = {r == 0 ? "0" : r.toFixed(5)}
              </h2>
              <h2 className="text-xl text-semibold text-white">
                n = {n == Infinity ? "0" : n.toFixed(2)}
              </h2>
            </div>
          </div>
          {info.loan ? (
            <>
              {" "}
              <h2 className="text-2xl font-bold text-center text-white my-1">
                Solving Formula
              </h2>
              <div className="flex flex-col items-start text-sm ">
                <div className="flex justify-center items-center space-x-2 text-white">
                  <div>APR=</div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="pb-1">Int</span>
                    <span></span>
                    <span className="border-t border-blue-50">
                      Loan {info.d_basis && "- Int"}
                      {info.cb_basis && "- CB"}
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
                    <span className="pb-1">{info.int_a}</span>
                    <span></span>
                    <span className="border-t border-blue-50">
                      {info.loan} {info.d_basis && "-"}{" "}
                      {info.d_basis && info.int_a} {info.cb_basis && "-"}
                      {info.cb_basis && info.cb_a}
                    </span>
                  </div>
                  <div>x</div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="pb-1">360</span>
                    <span></span>
                    <span className="border-t border-blue-50">{info.mp}</span>
                  </div>
                  <div>x</div>
                  <div>100</div>
                </div>
                <div className="text-white">
                  {" "}
                  <h2 className="w-[400px]  ml-[7%]  "> = {getApr()}%</h2>
                </div>
              </div>
              <div className="flex flex-col items-start text-white text-sm mt-7">
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
    </>
  );
};

export default BestCostOfBankLoan;
