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
  const [showSignInButton, setShowSignInButton] = useState(true);
  const [error, setError] = useState("");

  const jwt = localStorage.getItem("jwt");
  let jwtExpired = true;
  let jwtPayload: any = null;

  if (jwt) {
    jwtExpired = isJwtExpired(jwt);
    if (!jwtExpired) {
      jwtPayload = JSON.parse(atob(jwt.split('.')[1])); // Decode JWT payload
    }
  }

  const handleEarlyAccessClick = () => {
    // Redirect if JWT is valid and user is not waitlisted
    if (jwt && !jwtExpired && jwtPayload && !jwtPayload.waitlisted) {
      window.location.href = "https://app.exponential.markets/auth?token=" + encodeURIComponent(jwt);
    } else {
      setShowSignInButton(true); // Show Google sign-in if not valid
    }
  };

  const handleGoogleSignIn = async (credentialResponse: any) => {
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
      localStorage.setItem("jwt", result.token); // Store JWT in state

      // Check if waitlisted
      const jwtPayload = JSON.parse(atob(result.token.split('.')[1]));
      if (!jwtPayload.waitlisted) {
        localStorage.setItem("jwt", result.token);
        window.location.href = `https://app.exponential.markets/auth?token=${encodeURIComponent(result.token)}`;
      } else {
        setShowSignInButton(false); // Show invite code input
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const raw = JSON.stringify({
      invite_code: inviteCode,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, // Include JWT as a Bearer token
      },
      body: raw,
    };

    try {
      const response = await fetch(
        "https://api.exponential.markets/investor/check-invite",
        requestOptions
      );
      const result: { token?: string } = await response.json();

      if (result.token) {
        // decode jwt
        const jwtPayload = JSON.parse(atob(result.token.split('.')[1]));
        if (!jwtPayload.waitlisted) {
          localStorage.setItem("jwt", result.token); // Store new JWT
          window.location.href = `https://app.exponential.markets/auth?token=${encodeURIComponent(result.token)}`;
        } else {
          setError("Invalid invite code. Please try again.");
        }
      } else {
        setError("Invalid invite code. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="rounded-full px-6" onClick={handleEarlyAccessClick}>
            Early Access
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[400px]">
          <DialogHeader>
            <DialogTitle>
              {showSignInButton
                ? "Sign in with Google"
                : "You're on the waitlist!"}
            </DialogTitle>
            <DialogDescription>
              {showSignInButton
                ? "Join the waitlist now!"
                : "Have an invite code? Enter it below."}
            </DialogDescription>
          </DialogHeader>
          {showSignInButton ? (
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
              />
            </div>
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
    </>
  );
};

export default EarlyAccess;
