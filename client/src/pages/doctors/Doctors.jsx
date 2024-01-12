import { Footer, Navbar } from '../../components/home'

const Doctors = () => {
  return (
    <>
    <Navbar />
      <section className="w-full items-center justify-center flex min-h-[100dvh]">
        <div className="flex items-center justify-center w-full h-full py-16 px-2 bg-[#28661E]">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold text-white">Doctors</h1>
            <p className=" text-5xl text-white">Coming Soon</p>
          </div>
        </div>
      </section>
    <Footer />
  </>
  )
}

export default Doctors