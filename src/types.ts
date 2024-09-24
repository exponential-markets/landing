export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  earn: string;
  features: string[];
  cta: { text: string; type: "primary" | "outline" };
};

export type TeamMember = {
  image: string;
  name: string;
  role: string;
  description: string;
  contacts: {
    twitter: string;
    mobile: string;
  };
};
