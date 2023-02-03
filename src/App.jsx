import Sidebar from "./components/Sidebar/Sidebar";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
