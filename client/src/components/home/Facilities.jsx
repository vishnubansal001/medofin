import { Button } from "@material-tailwind/react";
import featureImg from '../../assets/feature-img.png'
import videoImg from '../../assets/video-icon.png'
import avatar from '../../assets/avatar-icon.png'

const Facilities = () => {
  return (
    <section className="py-20">
      <div className=" container">
        <div className=" flex items-center justify-between flex-col lg:flex-row">
          {/* === Feature content === */}
          <div className="xl:w-[670px]">
            <h2 className=" font-semibold text-5xl mb-16">
              Get virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4 text-lg font-thin">
              <li className="mt-2">
                1. Schedule the appointment directly.
              </li>
              <li className="mt-2">
                2. Search for your doctor by name, specialty or location.
              </li>
              <li className="mt-2">
                3. View our physicians who are accepting new patients, use the online searching tool to select an appointment time.
              </li>
            </ul>
            <Button className="bg-blue-600 mt-6 rounded-full text-white">Learn More</Button>
          </div>

          {/*======= Feature img ======== */}
          <div className=" relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="" />

            <div className="w-[150px] lg:w-[248px]  bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-medium">
                    Tue,24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-normal">10:00AM</p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px]  flex items-centere justify-center bg-yellow-400 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoImg} alt="" className=" scale-150" />

                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-blue-500 font-normal mt-2 lg-mt-4 rounded-full">
                Consultation
              </div>

              <div className=" flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatar} alt="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-medium text-black">Dr. Aadit Sharma</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
