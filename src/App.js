import "./App.css";
import AuthorInfo from "./Components/AuthorInfo/AuthorInfo";
import TradeCredit from "./Components/TradeCredit/TradeCredit";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-3">
        Finance Calculation
      </h1>
      <TradeCredit></TradeCredit>
      <AuthorInfo></AuthorInfo>
    </div>
  );
}

export default App;
