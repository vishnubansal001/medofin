import { bene } from "../../database/data";

const Benefits = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-10 lg:px-20 px-10 lg:pb-20 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="lg:text-2xl md:text-xl text-lg font-semibold">
          Benefits with Medofin
        </h1>
        <p>Get 10% Health Cashback* T&C</p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="lg:text-xl text-lg font-semibold">How does it work?</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="lg:col-span-2 col-span-1 gap-4 flex flex-col">
            {bene?.map((item, ind) => (
              <div
                key={ind}
                className="flex flex-row items-center gap-3"
                data-aos="flip-right"
              >
                <p className="h-14 flex flex-col justify-center items-center text-center bg-[#F1F3F7] rounded-full w-14">
                  {ind + 1}
                </p>
                <div className="w-[90%]">
                  <p className="lg:text-lg text-base">{item.que}</p>
                  <p className="lg:text-base text-sm">{item.ans}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="gap-4 flex flex-col">
            <h1 className="lg:text-xl text-lg font-semibold">
              Why book lab tests with Medofin?
            </h1>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <div>
                <h1>Fast &</h1>
                <h1>Hasstle Free</h1>
              </div>
              <div>
                <h1>Book Test</h1>
                <h1>by one click of a button</h1>
              </div>
              <div>
                <h1>At Home</h1>
                <h1>Collection</h1>
              </div>
              <div>
                <h1>100 % Safe </h1>
                <h1>&Secure</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
