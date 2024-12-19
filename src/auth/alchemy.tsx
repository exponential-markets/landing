import { AlchemyAccountsUIConfig } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { createConfig } from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra";
import ExponentialLogo from "@/assets/logo.svg";

const alchemyUiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "filled",
  auth: {
    sections: [
      [{ type: "email", emailMode: "otp" }],
      [
        { type: "passkey" },
        { type: "social", authProviderId: "google", mode: "redirect", redirectUrl: "http://localhost:8080/user/auth", scope: "email profile openid" },
        { type: "social", authProviderId: "facebook", mode: "redirect", redirectUrl: "http://localhost:8080/user/auth" },
      ],
      [
        {
          type: "external_wallets",
          walletConnect: { projectId: "your-project-id",  showQrModal: true, },
        },
      ],
    ],
    addPasskeyOnSignup: false,
    header: <img src={ExponentialLogo} />,
  },
  supportUrl: "contact@exponential.markets",
};


export const alchemyConfig = createConfig(
  {
    transport: alchemy({ apiKey: "JWMJ7tx87kfhZJXeloay9jPclXbbbifR" }),
    chain: sepolia,
    ssr: false,
    enablePopupOauth: false,
    oauthCallbackUrl: "http://localhost:8080/user/auth",
  },
  alchemyUiConfig,
);

export const alchemyQueryClient = new QueryClient();
