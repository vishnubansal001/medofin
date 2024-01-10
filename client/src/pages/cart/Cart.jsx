import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { Footer } from "../../components/home";
import cartImage from "../../assets/cartImage.png";

const cartItems = [
  {
    id: 1,
    name: "SUPRADYN DAILY TABLET 15 S",
    description: `ABBOTT HEALTHCARE (GENERAL MEDICINE) 15.5`,
    price: 100,
    image: cartImage,
    quantity: 1,
  },
  {
    id: 1,
    name: "SUPRADYN DAILY TABLET 15 S",
    description: `ABBOTT HEALTHCARE (GENERAL MEDICINE) 15.5`,
    price: 100,
    image: cartImage,
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <>
      <header className="flex items-center justify-center w-full z-10 fixed top-0 bg-white/50 backdrop-blur-sm bg-clip">
        <nav className="flex items-center justify-center w-full flex-col gap-2">
          <div className="flex items-center justify-between px-6 py-3 border-[#dfdfdf] border-b w-full">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="logo" className="w-12 h-12" />
              <p className="font-lime text-base sm:flex hidden">Medofin</p>
            </div>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-black">
              Home
            </NavLink>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-black">
              LabTest
            </NavLink>
            <NavLink className="text-xs s:text-sm sm:text-base font-normal font-popp text-black">
              Sample Collection
            </NavLink>
          </div>
          <div className="flex items-center justify-between px-12 py-2 md:flex-row flex-col w-full gap-2">
            <div className="relative w-full md:w-[30rem]">
              <input
                type="text"
                placeholder="Search for medicines, health products and more"
                className="py-2 pl-8 pr-4 w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-500" />
              </div>
            </div>
            <button className="bg-[#28661E] text-white px-5 py-2">
              Place Order
            </button>
          </div>
        </nav>
      </header>
      <main className="w-full min-h-[100dvh] h-full flex items-center justify-center flex-col gap-12">
        <section className="w-full min-h-screen h-full flex items-center justify-center bg-product rounded-br-[5rem] rounded-bl-[5rem]">
          <div className="flex items-center justify-center w-full pt-[8rem]">
            <div className="flex w-full flex-col items-center justify-center py-12 px-4">
              <div className="flex items-center justify-center max-w-3xl w-full gap-1 flex-col">
                <div className="flex items-start justify-between w-full text-black bg-white p-4 md:flex-row flex-col">
                  <div className="flex items-center justify-center">
                    Deliver to Kismat Nagar 3 ... v
                  </div>
                  <div className="flex items-center justify-center">
                    My Cart: {cartItems.length} item
                  </div>
                </div>
                <div className="flex items-center justify-between w-full text-black bg-white p-4 flex-col">
                  <div className="flex items-center justify-center flex-col w-full gap-1 h-full pb-12">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="w-full flex items-center justify-between md:flex-row flex-col gap-4 p-4"
                      >
                        <div className="flex items-start justify-center gap-4 flex-row">
                          <img src={item.image} alt="cartitame" />
                          <div className="flex items-start justify-center gap-2 flex-col">
                            <h1>{item.name}</h1>
                            <p className="text-[#9095A0] text-xs">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-end justify-center gap-2 flex-col">
                          <h2 className="text-base">₹{item.price}</h2>
                          <div className="grid grid-cols-3 items-center justify-center">
                            <button className="border-[#28661e] h-full text-[#28661e] border p-2 flex items-center justify-center">
                              <FaPlus className="w-4 h-4" />
                            </button>
                            <button className="bg-[#28661e] p-2 h-full flex items-center justify-center text-white rounded-sm">
                              {item.quantity}
                            </button>
                            <button className="border-[#28661e] h-full text-[#28661e] border p-2 flex items-center justify-center">
                              <FaMinus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-[#28661e] text-sm w-full flex justify-start p-6 border-t">
                      Add more medicines
                    </div>
                  </div>
                  <div className="flex items-start justify-center flex-col w-full gap-2 border-t py-2">
                    <div className="text-sm">
                      Payable Amount:{" "}
                      {cartItems.reduce((num, item) => {
                        return num + item.price;
                      }, 0)}
                    </div>
                    <button className="rounded-md flex items-center justify-center bg-[#28661e] text-white w-full py-2 px-4">
                      Place order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default Cart;
