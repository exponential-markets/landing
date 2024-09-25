import FaqCard from "@/components/sections/faq/FaqCard";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const FrequentlyAskedQuestions = ({
  isDeveloperPage,
}: {
  isDeveloperPage: boolean;
}) => {
  const { t } = useTranslation();
  const contentKey = isDeveloperPage ? "developer.faq" : "investor.faq";

  const title = t(`${contentKey}.title`, {
    returnObjects: true,
  }) as { text: string; className: string }[];

  const faqData = t(`${contentKey}.data`, {
    returnObjects: true,
  }) as { question: string; answer: string }[];

  return (
    <div id="faq" className="mt-20 xl:mt-40 flex flex-col gap-4 items-center">
      <p className="text-3xl font-medium text-center text-balance mt-4 md:text-[42px] lg:text-5xl xl:text-6xl">
        {title.map(({ text, className }, index) => (
          <span key={index} className={className}>
            {text}
          </span>
        ))}
      </p>
      <div className="flex flex-col-reverse xl:grid xl:grid-cols-8 mt-20">
        <div className="col-span-2 flex flex-col gap-4 justify-center">
          <div className="flex justify-center items-start gap-3 xl:-rotate-[15deg] my-8">
            <div>
              <Mail className="size-16 text-primary" />
            </div>
            <div>
              <p className="w-max">{t(`${contentKey}.contact.question`)}</p>
              <p className="text-muted-foreground w-[210px]">
                {t(`${contentKey}.contact.description`)}
                <a
                  href={t(`${contentKey}.contact.link.href`)}
                  className="text-primary"
                  target="_blank"
                >
                  {" "}
                  {t(`${contentKey}.contact.link.text`)}
                </a>{" "}
                {t(`${contentKey}.contact.suffix`)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 col-span-4">
          {faqData.map(({ question, answer }, index) => (
            <FaqCard
              key={index}
              question={question}
              answer={answer}
              isOpenByDefault={index === 2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
