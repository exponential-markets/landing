import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { isJwtExpired } from "@/lib/jwt";

const EarlyAccess = () => {
  const [inviteCode, setInviteCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSignInButton, setShowSignInButton] = useState(false);
  const [error, setError] = useState("");

  const jwt = localStorage.getItem("jwt");
  let jwtExpired = true;
  if (jwt) {
    jwtExpired = isJwtExpired(jwt);
  }

  const handleSubmit = async () => {
    setLoading(true);
    const raw = JSON.stringify({
      invite_code: inviteCode,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
    };

    try {
      const response = await fetch(
        "https://api.exponential.markets/check-invite",
        requestOptions
      );
      const result: { invited: boolean } = await response.json();

      if (result.invited) {
        setLoading(false);
        setShowSignInButton(true);
        setError("");
      } else {
        setLoading(false);
        setError("Invalid invite code. Please try again.");
      }
    } catch {
      setLoading(false);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {!jwtExpired ? (
        <Button
          onClick={() => {
            window.location.href = "https://app.exponential.markets/dashboard";
          }}
          size="lg"
          className="rounded-full px-6"
        >
          Go to App
        </Button>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-full px-6">
              Early Access
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[400px]">
            <DialogHeader>
              <DialogTitle>
                {showSignInButton ? "Sign in to continue" : "Enter Invite Code"}
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            {showSignInButton ? (
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  const formData = new FormData();
                  formData.append("credential", credentialResponse.credential!);

                  const requestOptions = {
                    method: "POST",
                    body: formData,
                  };

                  try {
                    const response = await fetch(
                      "https://api.exponential.markets/user/auth",
                      requestOptions
                    );
                    const result: { token: string } = await response.json();
                    // store the token in local storage
                    localStorage.setItem("jwt", result.token);

                    // Redirect to the dashboard app with the token as a URL parameter
                    window.location.href = `https://app.exponential.markets/auth?token=${encodeURIComponent(
                      result.token
                    )}`;
                  } catch (error) {
                    console.error(error);
                  }
                }}
              />
            ) : (
              <div>
                <div className="flex gap-4 items-start">
                  <Input
                    type="text"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    placeholder="Enter your invite code"
                  />
                  <Button onClick={handleSubmit} disabled={loading}>
                    Submit
                    {loading && (
                      <Loader2 className="animate-spin size-4 ml-2" />
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="text-red-500 text-center mt-1 text-sm">
                    {error}
                  </p>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default EarlyAccess;
