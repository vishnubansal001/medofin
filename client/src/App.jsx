import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./components/signIn/Form";
import SignUp from "./pages/signUp/SignUp";
import Labs from "./pages/labs/Labs";
import { Toaster } from 'react-hot-toast'
import Experience from "./pages/experience/Experience";
import Products from "./pages/product/Products";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="/exp" element={<Experience />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
