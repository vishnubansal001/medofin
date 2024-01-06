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
import Prescription from "../../components/pharmecy/Prescription";

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
      <Prescription/>
      <Blog />
      <Freq />
      <Footer />
    </>
  );
};

export default Pharmacy;
