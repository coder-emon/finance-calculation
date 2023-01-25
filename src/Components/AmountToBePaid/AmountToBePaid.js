import React, { useState } from "react";

const AmountToBePaid = () => {
  const [cd, setCd] = useState();
  const [cp, setCp] = useState();
  const [dp, setDp] = useState();
  const [date, setDate] = useState();
  const [invoiceNo, setInvoiceNo] = useState();
  const [invoiceAmount, setInvoiceAmount] = useState();

  const handleCdChange = (e) => {
    setCd(e.target.value);
  };
  const handleCpChange = (e) => {
    setCp(e.target.value);
  };
  const handleDpChange = (e) => {
    setDp(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleInvoiceNoChange = (e) => {
    setInvoiceNo(e.target.value);
  };
  const handleInvoiceAmountChange = (e) => {
    setInvoiceAmount(e.target.value);
  };

  //Date addtion function 1
  function addDays(mydate, days) {
    mydate.setDate(mydate.getDate() + days);
    return mydate;
  }
  const mydate = new Date(date);
  const cpDate = addDays(mydate, parseInt(cp));
  //date addition function 2
  function addDays2(mydate2, days) {
    mydate2.setDate(mydate2.getDate() + days);
    return mydate2;
  }
  const mydate2 = new Date(date);
  console.log(mydate2);
  const dpDate = addDays2(mydate2, parseInt(dp));

  const addToCompare = (e) => {
    e.preventDefault();
    console.log(cpDate);
    const discount = invoiceAmount * (cd / 100);
    const toBePaid = invoiceAmount - discount;
    const cpLastDateOfPayment = cpDate.toDateString();
    const dpLastDateOfPayment = dpDate.toDateString();
    const tableBody = document.getElementById("tobepaidtable");
    const tr = document.createElement("tr");
    tr.classList.add(
      "border-b",
      "border-opacity-20",
      "dark:border-gray-700",
      "dark:bg-gray-900",
      "text-center"
    );
    tr.innerHTML = `
    <td className="p-3">
                        <p>${invoiceNo}</p>
                      </td>
                      <td className="p-3">
                        <p>${invoiceAmount}</p>
                      </td>
                      <td className="p-3">
                        <p>${discount}</p>
                      </td>
                      <td className="p-3">
                        <p>${toBePaid}</p>
                      </td>
                      <td className="p-3 ">
                        <p>${dp ? dpLastDateOfPayment : cpLastDateOfPayment}</p>
                      </td>
    
    `;
    tableBody.appendChild(tr);
    const tableBody2 = document.getElementById("tobepaidtable2");
    const tr2 = document.createElement("tr");
    tr2.classList.add(
      "border-b",
      "border-opacity-20",
      "dark:border-gray-700",
      "dark:bg-gray-900",
      "text-center"
    );
    tr2.innerHTML = `
      <td className="p-3">
                          <p>${invoiceNo}</p>
                        </td>
                        <td className="p-3">
                          <p>${invoiceAmount}</p>
                        </td>
                        <td className="p-3">
                          <p>${invoiceAmount}</p>
                        </td>
                        <td className="p-3 ">
                          <p>${cpLastDateOfPayment}</p>
                        </td>
      
      `;
    tableBody2.appendChild(tr2);
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center px-5">
      <div className="flex flex-col w-full md:w-[700px] bg-gray-800 rounded shadow-white min-h-[400px] p-5">
        <h2 className="text-center text-2xl font-bold text-white">
          Amount to be paid
          <br />
          Last Date of Payment
        </h2>
        <form onSubmit={addToCompare}>
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
              <label htmlFor="dp" className="w-full text-white text-sm">
                DP - Discount Period
              </label>
              <input
                type="number"
                placeholder="DP - Discount Period"
                id="dp"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleDpChange}
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="date" className="w-full text-white text-sm">
                Invoice Date <span className="text-[10px]">(EOM) </span>
              </label>
              <input
                type="date"
                placeholder="Invoice Date"
                id="date"
                className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm"
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-3 w-full">
              <div className="w-[50%] mx-auto">
                <label
                  htmlFor="invoice_no"
                  className="w-full text-white text-sm"
                >
                  Invoice Number
                </label>
                <input
                  type="number"
                  placeholder="Invoice Number"
                  id="invoice_number"
                  className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                  required
                  onChange={handleInvoiceNoChange}
                />
              </div>
              <div className="w-[50%] mx-auto">
                <label
                  htmlFor="invoice_amount"
                  className="w-full text-white text-sm"
                >
                  Invoice Amount
                </label>
                <input
                  type="number"
                  placeholder="Invoice Amount"
                  id="invoice_amount"
                  className="w-full outline-none focus:ring-2 bg-slate-200 rounded px-3 py-2 text-gray-800 mt-1 placeholder:text-sm "
                  required
                  onChange={handleInvoiceAmountChange}
                />
              </div>
            </div>
            <button
              className="text-sm text-white bg-blue-700 px-2 py-1 rounded my-2 "
              type="submit"
            >
              Add To Checklist
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-white my-1">
            Result
          </h2>
          <div className="container p-2 mx-auto sm:p-4 text-gray-100">
            <h2 className="mb-4 text-xl font-semibold leading-tight text-center">
              If All Discount Taken
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                {/* <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup> */}
                <thead className="bg-gray-600 dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">Invoice No.</th>
                    <th className="p-3">Invoice Amount</th>
                    <th className="p-3">Discount</th>
                    <th className="p-3 min-w-[90px]">Amount to be paid</th>
                    <th className="p-3 min-w-[100px]">Last date of payment</th>
                  </tr>
                </thead>
                <tbody id="tobepaidtable"></tbody>
              </table>
            </div>
          </div>
          <div className="container p-2 mx-auto sm:p-4 text-gray-100">
            <h2 className="mb-4 text-xl font-semibold leading-tight text-center">
              If Discount Not Taken
            </h2>
            <div className="overflow-x-auto ">
              <table className="min-w-full text-xs">
                {/* <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup> */}
                <thead className="bg-gray-600 dark:bg-gray-700">
                  <tr className="text-left">
                    <th className="p-3">Invoice No.</th>
                    <th className="p-3">Invoice Amount</th>
                    <th className="p-3 min-w-[90px]">Amount to be paid</th>
                    <th className="p-3 min-w-[100px]">Last date of payment</th>
                  </tr>
                </thead>
                <tbody id="tobepaidtable2">
                  {/* <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Tesla Inc.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-400">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-400">Tuesday</p>
                    </td>
                    <td className="p-3 ">
                      <p>$275</p>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Coca Cola co.</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-400">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-400">Tuesday</p>
                    </td>
                    <td className="p-3 ">
                      <p>$8,950,500</p>
                    </td>
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Nvidia Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="dark:text-gray-400">Friday</p>
                    </td>
                    <td className="p-3">
                      <p>01 Feb 2022</p>
                      <p className="dark:text-gray-400">Tuesday</p>
                    </td>
                    <td className="p-3 ">
                      <p>$98,218</p>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountToBePaid;
