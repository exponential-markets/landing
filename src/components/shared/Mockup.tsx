import { cn } from "@/lib/utils";

type MockupProps = {
  imageSrc: string;
  altText: string;
  className?: string;
};

const Mockup = ({ imageSrc, altText, className }: MockupProps) => {
  return (
    <div
      className={cn(
        "rounded-xl xl:rounded-2xl border-[8px] border-zinc-700 relative overflow-hidden",
        className
      )}
    >
      <img src={imageSrc} alt={altText} className="rounded-lg object-cover" />
    </div>
  );
};

export default Mockup;
