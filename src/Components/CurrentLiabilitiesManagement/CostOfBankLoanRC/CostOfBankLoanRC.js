import React, { useState } from 'react';
import CurrentLiabilitiesMgtNav from '../CurrentLiabilitiesMgtNav/CurrentLiabilitiesMgtNav';

const CostOfBankLoanRC = () => {
    const [info, setInfo] = useState({
        loan: 0,
        int_p: 0,
        cf_p: 0,
        int_a: 0,
        cf_a: 0,
        used_loan_p: 0,
        unused_loan_p: 0,
        used_loan_a: 0,
        unused_loan_a: 0,

    });

    const Int_aChange = () => {
        const n_int_a = info.used_loan_a && info.used_loan_a * (info.int_p && info.int_p / 100);
        setInfo({ ...info, int_a: n_int_a });
        return n_int_a;
    };
    const Cf_aChange = () => {
        const n_cf_a = info.unused_loan_a && info.unused_loan_a * (info.cf_p && info.cf_p / 100);
        setInfo({ ...info, cf_a: n_cf_a });
        return n_cf_a;
    };
    const UsedLoan_aChange = () => {
        const n_used_loan_a = info.loan && info.loan * (info.used_loan_p && info.used_loan_p / 100);
        setInfo({ ...info, used_loan_a: n_used_loan_a });
        return n_used_loan_a;
    };
    const UnUsedLoan_aChange = () => {
        const n_unused_loan_a = info.loan && info.loan * (info.unused_loan_p && info.unused_loan_p / 100);
        setInfo({ ...info, cb_a: n_unused_loan_a });
        return n_unused_loan_a;
    };
    // const r =
    //     info.int_a /
    //     (info.loan -
    //         (info.d_basis && (info.int_a || Int_aChange())) -
    //         (info.cb_basis && (info.cb_a || Cf_aChange())));
    // const n = 360 / info.mp;

    // const getApr = () => {
    //     const apr = info.mp < 360 ? r * n * 100 : r * 100;
    //     const twoDecimalApr = apr.toFixed(2);
    //     if (twoDecimalApr == Infinity) {
    //         return 0;
    //     }
    //     return twoDecimalApr;
    // };

    const annualCost = info.int_a + info.cf_a
    const getEir = () => {
        const eir = (annualCost / info.used_loan_a) * 100;
        const twoDecimalEir = eir.toFixed(2);
        if (twoDecimalEir == Infinity) {
            return 0;
        }

        return twoDecimalEir;
    };

    const handleLoanChange = (e) => {
        setInfo({ ...info, loan: e.target.value });
    };
    const handleUsedLoan_pChange = (e) => {
        setInfo({ ...info, used_loan_p: e.target.value });
    }
    const handleUnUsedLoan_pChange = (e) => {
        setInfo({ ...info, unused_loan_p: e.target.value });
    }
    const handleUsedLoan_aChange = (e) => {
        setInfo({ ...info, used_loan_a: e.target.value });
    }
    const handleUnUsedLoan_aChange = (e) => {
        setInfo({ ...info, unused_loan_a: e.target.value });
    }
    const handleInt_pChange = (e) => {
        setInfo({ ...info, int_p: e.target.value });
    };

    const handleCF_pChange = (e) => {
        setInfo({ ...info, cf_p: e.target.value });
        console.log(e.target.value);
    };
    const handleInt_aChange = (e) => {
        setInfo({ ...info, int_a: parseFloat(e.target.value) });
    };
    const handleCF_aChange = (e) => {
        setInfo({ ...info, cf_a: parseFloat(e.target.value) });
    };

    const handleIntKeyUp = () => {
        setInfo({ ...info, int_a: Int_aChange() });
    };
    const handleCfKeyUp = () => {
        setInfo({ ...info, cf_a: Cf_aChange() });
    };
    const handleUsedLoanKeyUp = () => {
        setInfo({ ...info, used_loan_a: UsedLoan_aChange() });
    };
    const handleUnUsedLoanKeyUp = () => {
        setInfo({ ...info, unused_loan_a: UnUsedLoan_aChange() });
    };

    const handleClear = (e) => {
        e.preventDefault();
        e.target.reset();
        setInfo({
            loan: 0,
            int_p: 0,
            cf_p: 0,
            int_a: 0,
            cf_a: 0,
            used_loan_p: 0,
            unused_loan_p: 0,
            used_loan_a: 0,
            unused_loan_a: 0,
        });

    };
    return (
        <>
            <CurrentLiabilitiesMgtNav></CurrentLiabilitiesMgtNav>
            <div className="flex justify-center items-center px-5">
                <div className="flex flex-col w-full md:w-[400px] bg-gray-800 rounded shadow-white min-h-[350px] p-5">
                    <h2 className="text-center text-2xl font-bold text-white">
                        Cost of Bank Loan <br /> Revolving Credit
                    </h2>
                    <form onSubmit={handleClear}>
                        <div className="flex space-x-3 mb-3">
                            <div className="w-[50%]">
                                <label htmlFor="loan" className="w-full text-white text-sm">
                                    Loan Granted
                                </label>
                                <input
                                    type="number"
                                    placeholder="Loan Granted"
                                    id="loan"
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                                    onChange={handleLoanChange}
                                />
                            </div>
                            <div className="w-[50%]">
                                <label htmlFor="used_l_p" className="w-full text-white text-sm">
                                    Used Loan in %
                                </label>
                                <input
                                    type="number"
                                    placeholder="Used Loan Percentage"
                                    id="used_l_p"
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleUsedLoan_pChange}
                                    onKeyUp={handleUsedLoanKeyUp}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="w-[50%]">
                                <label htmlFor="used_l_p" className="w-full text-white text-sm">
                                    Unused Loan in %
                                </label>
                                <input
                                    type="number"
                                    placeholder="Unused Loan Percentage"
                                    id="used_l_p"
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleUnUsedLoan_pChange}
                                    onKeyUp={handleUnUsedLoanKeyUp}
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
                                <label htmlFor="cf_p" className="w-full text-white text-sm">
                                    CF Percentage
                                </label>
                                <input
                                    type="number"
                                    placeholder="CF Percentagee"
                                    id="cf_p"
                                    defaultValue={0}
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleCF_pChange}
                                    onKeyUp={handleCfKeyUp}
                                />
                            </div>
                            <div className="w-[50%]">
                                <label htmlFor="used_loan_a" className="w-full text-white text-sm">
                                    Used Loan Amount
                                </label>
                                <input
                                    type="number"
                                    placeholder="Used Loan Amount"
                                    id="used_loan_a"
                                    defaultValue={
                                        info.loan && info.loan * (info.used_loan_p && info.used_loan_p / 100)
                                    }
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleUsedLoan_aChange}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="w-[50%]">
                                <label htmlFor="unused_loan_a" className="w-full text-white text-sm">
                                    Unused Loan Amount
                                </label>
                                <input
                                    type="number"
                                    placeholder="Unused Loan Amount"
                                    id="unused_loan_a"
                                    defaultValue={
                                        info.loan && info.loan * (info.unused_loan_p && info.unused_loan_p / 100)
                                    }
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleUnUsedLoan_aChange}
                                />
                            </div>
                            <div className="w-[50%]">
                                <label htmlFor="int_a" className="w-full text-white text-sm">
                                    Interest Amout
                                </label>
                                <input
                                    type="number"
                                    placeholder="Interest Amout"
                                    id="int_a"
                                    defaultValue={
                                        info.used_loan_a && info.used_loan_a * (info.int_p && info.int_p / 100)
                                    }
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleInt_aChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center space-x-3">
                            <div className="w-[50%]">
                                <label htmlFor="cf_a" className="w-full text-white text-sm">
                                    CF Amount
                                </label>
                                <input
                                    type="number"
                                    placeholder="CB Amount"
                                    id="cf_a"
                                    defaultValue={
                                        info.unused_loan_a && info.unused_loan_a * (info.cf_p && info.cf_p / 100)
                                    }
                                    className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                                    onChange={handleCF_aChange}
                                />
                            </div>


                        </div>

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
                                <div>
                                    <h2 className='text-xl text-white'>Here,</h2>
                                    <p className='text-white ml-10'>Loan = {info.loan}</p>
                                    <p className='text-white ml-10'>Loan Used = {info.used_loan_a}</p>
                                    <p className='text-white ml-10'>Loan Unused= {info.unused_loan_a}</p>
                                    <p className='text-white ml-10'>Int Amount = {info.int_a}</p>
                                    <p className='text-white ml-10'>CF Amount = {info.cf_a}</p>

                                </div>
                                <div className='mb-6'>
                                    <div className='text-white'>
                                        Annual Cost = Int + CF
                                    </div>
                                    <div className='text-white ml-[79px]'>
                                        = {info.int_a} + {info.cf_a}
                                    </div>
                                    <div className='text-white ml-[79px]'>
                                        = {annualCost}
                                    </div>

                                </div>
                                <div className="flex justify-center items-center space-x-2 text-white">
                                    <div>EIR=</div>
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="pb-1 border-b">Annual Cost</span>
                                        <span></span>
                                        <span className=" border-blue-50">
                                            Used Loan

                                        </span>
                                    </div>

                                    <div>x</div>
                                    <div>100</div>
                                </div>
                                <div className="flex justify-center items-center space-x-2 ml-[8%] text-white">
                                    <div> =</div>
                                    <div className="flex flex-col justify-center items-center">
                                        <span className="pb-1">{annualCost}</span>
                                        <span></span>
                                        <span className="border-t border-blue-50">
                                            {info.used_loan_a && info.used_loan_a}
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

export default CostOfBankLoanRC;