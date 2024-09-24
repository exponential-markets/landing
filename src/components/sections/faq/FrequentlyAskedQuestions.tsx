import { faqData } from "@/constants/constants";
import FaqCard from "@/components/sections/faq/FaqCard";

const FrequentlyAskedQuestions = () => {
  return (
    <div
      id="faq"
      className="mt-20 xl:mt-40 xl:px-12 flex flex-col gap-4 items-center"
    >
      <p className="text-3xl font-medium text-center text-balance mt-4 md:text-[42px] lg:text-5xl xl:text-6xl">
        Frequently Asked Questions <span className="text-primary"> (FAQs)</span>
      </p>
      <div className="flex flex-col gap-6 lg:px-36 xl:px-48 mt-20">
        {faqData.map(({ question, answer }, index) => (
          <FaqCard
            key={index}
            question={question}
            answer={answer}
            isOpenByDefault={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
