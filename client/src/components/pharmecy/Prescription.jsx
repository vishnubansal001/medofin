import video from "../../assets/pharmacy_video.png";
import { IoIosCloudUpload } from "react-icons/io";

const Prescription = () => {
  return (
    <section className="flex items-center justify-center min-h-[100dvh] h-full w-full">
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex w-full items-center justify-around flex-row bg-[#28661e] pt-12 pb-32 text-white flex-wrap gap-4">
          <h1>Consult A Doctor</h1>
          <h1>Explore Products</h1>
          <h1>Best Seller</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-12 sm:gap-16 w-full max-w-6xl -mt-[4rem] p-2">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <img src={video} alt="video" className="w-[30rem] h-auto" data-aos="flip-right"/>
            {/* <video src="https://www.youtube.com/watch?v=9XwazFkzX9k" controls className="w-full h-full"/> */}
          </div>
          <div className="flex items-center justify-center flex-col rounded-lg bg-white shadow w-full h-full">
          <label htmlFor="prescriptionInput" className="bg-black text-white p-6 rounded-br-xl rounded-bl-xl">
                  Order with Prescription
                </label>
            <div className="w-full h-full p-8 px-14 text-white rounded-lg shadow-lg flex items-center justify-center gap-4 flex-col">
              
              <div className="mb-4 relative w-full h-full border border-dashed border-green-500 bg-opacity-20 bg-green-500 flex items-center justify-center text-black rounded-xl">
                <p>Upload Prescription</p>
                <input
                  type="text"
                  id="prescriptionInput"
                  className="w-full p-2 border-dashed border-green-500 rounded bg-opacity-20 bg-green-500 text-black placeholder-black"
                  placeholder="Upload Prescription"
                  hidden
                />
              </div>
              <div className="w-full flex items-center justify-center text-slate-500 gap-2">
                <div className="w-full h-[1px] bg-slate-500 rounded-full"></div>
                Or
                <div className="w-full h-[1px] bg-slate-500 rounded-full"></div>
              </div>
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="otherField"
                  className="w-full p-2 border rounded bg-gray-200 text-black"
                  placeholder="Enter Prescription Link"
                />
              </div>

              <button
                type="button"
                className="bg-[#28661e] hover:bg-[#28661e] text-white py-2 px-8 rounded-full flex items-center justify-center gap-2"
              >
                <IoIosCloudUpload size={15}/>
                Upload File
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prescription;
