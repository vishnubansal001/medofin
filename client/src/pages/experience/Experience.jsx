import { Grid, Her } from "../../components/experience";
import {
  Ans,
  Facilities,
  Footer,
  Navbar,
  Sign,
  Technologies,
} from "../../components/home";
import { techno } from "../../database/data";

const Experience = () => {
  return (
    <>
      <Navbar />
      <Her />
      <Grid />
      <Technologies techno={techno} />
      <Facilities />
      <Sign />
      <Ans />
      <Footer />
    </>
  );
};

export default Experience;
