import Badge from "@/components/shared/Badge";
import { Sparkles } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="mt-20 flex flex-col gap-4 items-center">
      <Badge icon={<Sparkles className="size-2" />} text="TESTIMONIALS" />
      <p className="text-3xl font-medium">Community</p>
    </div>
  );
};

export default Testimonials;
