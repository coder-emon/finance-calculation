import { createBrowserRouter } from "react-router-dom";
import AmountToBePaid from "../Components/AmountToBePaid/AmountToBePaid";
import BestTradeCredit from "../Components/BestTradeCredit/BestTradeCredit";
import CostOfBankLoan from "../Components/CostOfBankLoan/CostOfBankLoan";
import TradeCredit from "../Components/TradeCredit/TradeCredit";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <TradeCredit></TradeCredit>,
      },
      {
        path: "/besttradecredit",
        element: <BestTradeCredit></BestTradeCredit>,
      },
      {
        path: "/amounttobepaid",
        element: <AmountToBePaid></AmountToBePaid>,
      },
      {
        path: "/costofbankloan",
        element: <CostOfBankLoan></CostOfBankLoan>,
      },
    ],
  },
]);
