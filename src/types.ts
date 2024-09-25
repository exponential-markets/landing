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
  bulletins: string[];
  contacts: {
    email: string;
  };
};
