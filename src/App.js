import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthorInfo from "./Components/AuthorInfo/AuthorInfo";
import BestTradeCredit from "./Components/BestTradeCredit/BestTradeCredit";
import TradeCredit from "./Components/TradeCredit/TradeCredit";
import { router } from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
