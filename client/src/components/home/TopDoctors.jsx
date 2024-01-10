import DoctorList from "../Doctors/DoctorList";

const TopDoctors = () => {
  return (
    <section className="mb-20">
      <div className="xl:w-[470px]  mx-auto">
        <h2 className=" text-4xl font-bold text-center">
          Our top rated Doctors
        </h2>
        <p className="text-center mt-4">
          World-class care for everyone. Our health system offeres unmatched,
          expert health care.
        </p>
      </div>
      <DoctorList />
    </section>
  );
};

export default TopDoctors;
