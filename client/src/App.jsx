import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./components/signIn/Form";
import SignUp from "./pages/signUp/SignUp";
import Labs from "./pages/labs/Labs";
import { Toaster } from "react-hot-toast";
import Experience from "./pages/experience/Experience";
import Products from "./pages/product/Products";
import Pharmacy from "./pages/pharmacy/Pharmacy";
import Cart from "./pages/cart/Cart";
import LabTest from "./pages/labtest/LabTest";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="/exp" element={<Experience />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/pharmacy" element={<Pharmacy />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/lab-test" element={<LabTest />}></Route>
      </Routes>
    </>
  );
}

export default App;
