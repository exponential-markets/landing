import { faqData } from "@/constants/constants";
import FaqCard from "@/components/sections/faq/FaqCard";

const FrequentlyAskedQuestions = () => {
  return (
    <div
      id="faq"
      className="mt-20 md:px-20 lg:px-40 xl:px-80 flex flex-col gap-4 items-center"
    >
      <p className="text-3xl font-medium text-center text-balance mt-4 xl:text-4xl">
        Frequently Asked Questions <span className="text-primary"> (FAQs)</span>
      </p>
      <div className="flex flex-col gap-4">
        {faqData.map(({ question, answer }, index) => (
          <FaqCard key={index} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
