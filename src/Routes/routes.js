import { createBrowserRouter } from "react-router-dom";
import BestTradeCredit from "../Components/BestTradeCredit/BestTradeCredit";
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
    ],
  },
]);
