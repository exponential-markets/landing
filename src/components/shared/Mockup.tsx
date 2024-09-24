type MockupProps = {
  imageSrc: string;
  altText: string;
  className?: string;
};

const Mockup = ({ imageSrc, altText, className }: MockupProps) => {
  return (
    <div
      className={`border border-black h-fit rounded-xl relative ${className}`}
    >
      <div className="rounded-xl xl:rounded-2xl border-[8px] border-zinc-700 relative">
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-lg xl:rounded-xl"
        />
      </div>
    </div>
  );
};

export default Mockup;
