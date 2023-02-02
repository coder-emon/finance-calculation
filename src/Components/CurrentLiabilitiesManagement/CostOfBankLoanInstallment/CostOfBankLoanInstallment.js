import React, { useState } from "react";
import CurrentLiabilitiesMgtNav from "../CurrentLiabilitiesMgtNav/CurrentLiabilitiesMgtNav";

const CostOfBankLoanInstallment = () => {
    const [info, setInfo] = useState({
        loan: 0,
        int_p: 0,

        int_a: 0,
        n: 0,
        p: 0,
        d_basis: false,
    });
    const ac = info.loan - info.int_a;
    const Int_aChange = () => {
        const n_int_a = info.loan && info.loan * (info.int_p && info.int_p / 100);
        setInfo({ ...info, int_a: n_int_a });
        return n_int_a;
    };

    //   const c = info.loan * (info.int_p / 100);
    //   const r =
    //     info.int_a / (info.loan - (info.d_basis && (info.int_a || Int_aChange())));
    //   const n = 360 / info.mp;
    //   const getApr = () => {
    //     const apr = info.mp < 360 ? r * n * 100 : r * 100;
    //     const twoDecimalApr = apr.toFixed(2);
    //     if (twoDecimalApr == Infinity) {
    //       return 0;
    //     }
    //     return twoDecimalApr;
    //   };
    const getEir = () => {
        console.log(
            "c",
            info.int_a,
            "a",
            info.loan,
            "p",
            info.p,
            "n",
            info.n,
            "ac, ",
            ac
        );
        const eirD_basis =
            ((2 * info.p * info.int_a) /
                (ac * (info.n + 1))) *
            100;
        const eirNormal =
            ((2 * info.p * info.int_a) /
                (info.loan * (info.n + 1))) *
            100;
        if (info.d_basis) {
            const twoDecimalEir = eirD_basis.toFixed(2)
            return twoDecimalEir
        } else {
            const twoDecimalEir = eirNormal.toFixed(2)
            return twoDecimalEir
        }
        ;

    };

    const handleLoanChange = (e) => {
        setInfo({ ...info, loan: parseFloat(e.target.value) });
    };
    const handleInt_pChange = (e) => {
        setInfo({ ...info, int_p: parseFloat(e.target.value) });
    };

    const handlePChange = (e) => {
        setInfo({ ...info, p: parseFloat(e.target.value) });
    };
    const handleInt_aChange = (e) => {
        setInfo({ ...info, int_a: parseFloat(e.target.value) });
    };

    const handleNChange = (e) => {
        setInfo({ ...info, n: parseFloat(e.target.value) });
    };
    const handleIntKeyUp = () => {
        setInfo({ ...info, int_a: Int_aChange() });
    };

    const handleClear = (e) => {
        e.preventDefault();
        e.target.reset();
        setInfo({
            loan: 0,
            int_p: 0,

            int_a: 0,
            n: 0,
            p: 0,
            d_basis: false,
        });
    };
    return (
        <>
            <CurrentLiabilitiesMgtNav></CurrentLiabilitiesMgtNav>
            <div className="flex justify-center items-center px-5">
                <div className="flex flex-col w-full md:w-[400px] bg-gray-800 rounded shadow-white min-h-[350px] p-5">
                    <h2 className="text-center text-2xl font-bold text-white">
                        Cost of Bank Loan on Installment
                    </h2>
                    <form onSubmit={handleClear}>
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
                                    No of Payment - P
                                </label>
                                <input
                                    type="number"
                                    placeholder="No of Payment - P"
                                    id="cb_p"
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onKeyUp={handlePChange}
                                />
                            </div>
                            <div className="w-[50%]">
                                <label htmlFor="n" className="w-full text-white text-sm">
                                    Total No. Of Payment-N
                                </label>
                                <input
                                    type="number"
                                    placeholder="Total No. Of Payment-N"
                                    id="n"
                                    defaultValue=""
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onKeyUp={handleNChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-3">
                            <div className="w-[50%]">
                                <label htmlFor="int_a" className="w-full text-white text-sm">
                                    Interest Amount - C
                                </label>
                                <input
                                    type="number"
                                    placeholder="Interest Amount - C"
                                    id="int_a"
                                    defaultValue={info.loan * (info.int_p / 100)}
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleInt_aChange}
                                />
                            </div>
                            <div className="w-[50%] flex items-center justify-end">
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
                        </div>
                        <div className="flex  space-x-3 my-2"></div>
                        <div className="flex justify-center items-center">
                            <button
                                className="text-sm text-white bg-blue-700 px-2 py-1 rounded my-2 "
                                type="submit"
                            >
                                Clear Field
                            </button>
                        </div>
                    </form>
                    <div>
                        <h2 className="text-2xl font-bold text-center text-white my-1">
                            Result
                        </h2>
                        <div className="flex justify-evenly items-center">
                            <h2 className="text-xl text-semibold text-white">
                                EIR = {getEir()}%
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
                                        <span className="pb-1">2PC</span>
                                        <span></span>
                                        <span className="border-t border-blue-50">
                                            {info.d_basis && "("}A {info.d_basis && "- C"}
                                            {info.d_basis && ")"}
                                            (n+1)
                                        </span>
                                    </div>

                                    <div>x</div>
                                    <div>100</div>
                                </div>
                                <div className="flex justify-center items-center space-x-2 ml-[8%] text-white">
                                    <div> =</div>
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="pb-1">
                                            2 * {info.p} * {info.int_a.toFixed(2)}
                                        </span>
                                        <span></span>
                                        <span className="border-t border-blue-50">
                                            {info.d_basis && "("}
                                            {info.loan} {info.d_basis && "-"}
                                            {info.d_basis && info.int_a.toFixed(2)}
                                            {info.d_basis && ")"} ({info.n} + 1)
                                        </span>
                                    </div>
                                    <div>x</div>

                                    <div>100</div>
                                </div>
                                <div className="text-white">
                                    {" "}
                                    <h2 className="w-[400px]  ml-[7%]  "> = {getEir()}%</h2>
                                </div>
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

export default CostOfBankLoanInstallment;
