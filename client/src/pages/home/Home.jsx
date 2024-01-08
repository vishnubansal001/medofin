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
import TopDoctors from "../../components/home/TopDoctors";
import { techno } from "../../database/data";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Technologies techno={techno} />
      <Facilities />
      <TopDoctors />
      <Sign />
      <Ans />
      <Footer />
    </>
  );
};

export default Home;
