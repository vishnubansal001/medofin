import {
  Ans,
  Facilities,
  Footer,
  Hero,
  Info,
  Navbar,
  Sign,
  Technologies,
} from "../../components/home";
import { techno } from "../../database/data";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Technologies techno={techno} />
      <Facilities />
      <Sign />
      <Ans />
      <Footer />
    </>
  );
};

export default Home;
