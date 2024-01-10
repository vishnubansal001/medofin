import { faqs } from "../../../database/data";
import FaqItems from "./FaqItems";

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItems item={item} key={index} />
      ))}
    </ul>
  );
};

export default FaqList;
