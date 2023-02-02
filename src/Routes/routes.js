import { createBrowserRouter } from "react-router-dom";
import AmountToBePaid from "../Components/CurrentLiabilitiesManagement/AmountToBePaid/AmountToBePaid";
import BestCostOfBankLoan from "../Components/CurrentLiabilitiesManagement/BestCostOfBankLoan/BestCostOfBankLoan";
import BestTradeCredit from "../Components/CurrentLiabilitiesManagement/BestTradeCredit/BestTradeCredit";
import CostOfBankLoan from "../Components/CurrentLiabilitiesManagement/CostOfBankLoan/CostOfBankLoan";
import CostOfBankLoanInstallment from "../Components/CurrentLiabilitiesManagement/CostOfBankLoanInstallment/CostOfBankLoanInstallment";
import CostOfBankLoanRC from "../Components/CurrentLiabilitiesManagement/CostOfBankLoanRC/CostOfBankLoanRC";
import TradeCredit from "../Components/CurrentLiabilitiesManagement/TradeCredit/TradeCredit";
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
        path: "/currentliabilities",
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
      {
        path: "/bestcostofbankloan",
        element: <BestCostOfBankLoan></BestCostOfBankLoan>,
      },
      {
        path: "/costofbankloaninstalment",
        element: <CostOfBankLoanInstallment></CostOfBankLoanInstallment>,
      },
      {
        path: "/costofbankloanrc",
        element: <CostOfBankLoanRC></CostOfBankLoanRC>
      }
    ],
  },
]);
