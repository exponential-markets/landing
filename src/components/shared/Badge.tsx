import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text }) => {
  return (
    <div className="my-4 w-fit border bg-secondary text-primary px-3 rounded-full flex items-center gap-2">
      <div className="rounded-full bg-primary/10 text-primary p-1.5 my-2">
        {icon}
      </div>
      {text}
    </div>
  );
};

export default Badge;
