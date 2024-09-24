import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqCardProps {
  question: string;
  answer: string;
  isOpenByDefault?: boolean;
}

const FaqCard = ({ question, answer, isOpenByDefault }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="flex flex-col border bg-card p-4 md:p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-balance w-fit -tracking-[0.245]">{question}</p>
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
        className={cn(
          "overflow-hidden transition-mt transition-max-height duration-300 ease-in-out",
          isOpen ? "max-h-96 mt-4" : "max-h-0 mt-0"
        )}
      >
        <p className="text-pretty text-muted-foreground max-w-[80%] leading-[1.8] -tracking-[0.245]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
