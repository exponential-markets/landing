import React from "react";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text }) => {
  return (
    <div className="my-4 w-fit border border-primary/10 bg-card text-primary px-3 rounded-full flex items-center gap-1">
      <div className="rounded-full bg-primary/10 text-primary p-1 my-2">
        {icon}
      </div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default Badge;
