import FaqList from './Faq/FaqList'
import Faq from '../../assets/faq-img.png'


const Ans = () => {
    return (
        <section>
            <div className=" py-9 container">
                <div className="flex justify-between gap-[50px] lg:gap-0">
                    <div className="w-1/2 hidden md:block" data-aos="flip-right">
                        <img src={Faq} alt="" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-medium">
                            Most questions by our beloved customers
                        </h2>
                        <FaqList />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Ans