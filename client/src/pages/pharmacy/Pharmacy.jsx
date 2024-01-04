import { Footer, Navbar } from "../../components/home";
import {
  Blog,
  Boxes,
  Freq,
  Hero,
  Ser,
  Shop,
  Slide,
  Spec,
} from "../../components/pharmecy";

const Pharmacy = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <Slide />
      <Ser />
      <Boxes />
      <Spec />
      <Blog />
      <Freq />
      <Footer />
    </>
  );
};

export default Pharmacy;
