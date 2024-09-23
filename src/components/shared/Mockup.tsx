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
      <div className="rounded-xl border-[5px] xl:border-[16px] border-zinc-700 relative">
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-lg xl:rounded-[2px]"
        />
      </div>
    </div>
  );
};

export default Mockup;
