import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 border bg-secondary p-4 md:p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg text-balance w-fit">{question}</p>
        <div className="size-5">
          {isOpen ? (
            <Minus
              className="size-5 hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Plus
              className="size-5 hover:cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-lg text-balance text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
