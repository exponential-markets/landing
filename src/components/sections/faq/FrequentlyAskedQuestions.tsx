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

  const description = t(`${contentKey}.description`, {
    returnObjects: true,
  }) as string[];

  const faqData = t(`${contentKey}.data`, {
    returnObjects: true,
  }) as { question: string; answer: string }[];

  return (
    <div
      id="faq"
      className="mt-20 xl:mt-40 xl:px-12 flex flex-col gap-4 items-center"
    >
      <p className="text-3xl font-medium text-center text-balance mt-4 md:text-[42px] lg:text-5xl xl:text-6xl">
        {title.map(({ text, className }, index) => (
          <span key={index} className={className}>
            {text}
          </span>
        ))}
      </p>
      <div className="flex gap-6 md:gap-16 flex-wrap xl:flex-nowrap rounded-lg bg-card p-6 lg:p-16 mt-20">
        <div className="flex flex-col gap-4 md:flex-row xl:flex-col justify-between w-full">
          <div className="flex flex-col leading-[1.2] text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-medium">
            {description.map((text, index) => (
              <p key={index} className="w-max">
                {text}
              </p>
            ))}
          </div>
          <div className="flex items-start gap-3">
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
                >
                  {" "}
                  {t(`${contentKey}.contact.link.text`)}
                </a>{" "}
                {t(`${contentKey}.contact.suffix`)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
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
    </div>
  );
};

export default FrequentlyAskedQuestions;
