import { icons } from "lucide-react";

export const navbarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Developers",
    href: "/developer",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const faqData = [
  {
    question: "How can I start investing in algorithmic trading strategies?",
    answer:
      "To begin investing in algorithms, simply sign up on our platform, browse through the available algorithmic trading strategies, and choose one to invest in. You can start with as little as $10, and no prior experience or technical knowledge is needed.",
  },
  {
    question: "Are the algorithmic trading strategies reliable?",
    answer:
      "Yes, all algorithms on our platform undergo rigorous backtesting against years of historical market data, including bear markets. We take extra measures to minimize overfitting, ensuring that the algorithms perform well in real-world trading environments.",
  },
  {
    question:
      "Do I need to pay any upfront fees or sign up for a subscription?",
    answer:
      "No, there are no subscription fees or upfront costs. You only pay a small fee when you exit an algorithm, but only if it has generated profits for you.",
  },
  {
    question: "What happens if an algorithm doesn’t generate profits?",
    answer:
      "You only pay a fee when the algorithm generates profits. If an algorithm underperforms or doesn’t make money, there are no charges. Our goal is to protect your investments and ensure you only pay when you earn.",
  },
  {
    question:
      "Are these algorithmic trading strategies designed for small investors?",
    answer:
      "Yes, our platform is built specifically for retail investors. It provides access to advanced algorithmic trading strategies, without the usual high entry costs or complexity, making it accessible to everyone.",
  },
];

export const featuresData: {
  title: string;
  description: string;
  icon: keyof typeof icons;
}[] = [
  {
    title: "Start with $10",
    description: "Low ticket sizes to kickstart algorithmic trading journey",
    icon: "User",
  },
  {
    title: "No KYC needed",
    description: "We just execute trades from our co-owned wallet",
    icon: "User",
  },
  {
    title: "Pay only on Profits",
    description: "Fees solely when exiting an algorithm profitably",
    icon: "ChartColumn",
  },
  {
    title: "No API Integrations",
    description: "All you need is USDT in ETH wallet and you're good to go",
    icon: "WalletMinimal",
  },
  {
    title: "No Subscription Fee",
    description: "Access algorithms and their metrics for free to invest",
    icon: "User",
  },
  {
    title: "Withdraw Anytime",
    description: "Withdraw your funds from an algorithm anytime anywhere",
    icon: "HandCoins",
  },
];
