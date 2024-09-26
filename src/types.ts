export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  earn: string;
  features: string[];
  cta: { text: string; type: "primary" | "outline" };
};

export type Founder = {
  image: string;
  name: string;
  role: string;
  badge: string;
  bio: string[];
  contacts: {
    email: string;
    twitter: string;
    linkedin: string;
  };
};
