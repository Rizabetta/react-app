import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
