import { Navbar } from "../../components/home";
import heroBg from '../../assets/heroBg.png';

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-[100vh]" style={{backgroundImage:`url(${heroBg})`}}>
      <Navbar />
    </div>
  )
}

export default Home
