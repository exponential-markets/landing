import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { useAuthModal, useUser } from "@account-kit/react";
import { connectAndSignMessage } from "@/auth/signMessage";

const EarlyAccess = () => {
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState<'default' | 'waitlisted' | 'app'>('default');
  const { openAuthModal } = useAuthModal();
  const user = useUser();
  const authInProgress = useRef(false);

  // Check JWT on mount and after auth
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const jwtPayload = JSON.parse(atob(jwt.split(".")[1]));
        setButtonState(jwtPayload.waitlisted ? 'waitlisted' : 'app');
      } catch {
        setButtonState('default');
      }
    }
  }, []);

  // Handle auth after wallet connection only if no JWT exists
  useEffect(() => {
    const handleAuth = async () => {
      if (!user || authInProgress.current) return;
      
      const existingJwt = localStorage.getItem("jwt");
      if (existingJwt) return;

      try {
        authInProgress.current = true;
        setLoading(true);
        const authResponse = await connectAndSignMessage(window, user);

        if (authResponse.success && authResponse.token) {
          localStorage.setItem('jwt', authResponse.token);
          const jwtPayload = JSON.parse(atob(authResponse.token.split('.')[1]));
          setButtonState(jwtPayload.waitlisted ? 'waitlisted' : 'app');
        }
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setLoading(false);
        authInProgress.current = false;
      }
    };

    handleAuth();
  }, [user]);

  const handleEarlyAccessClick = () => {
    if (buttonState === 'app') {
      const jwt = localStorage.getItem('jwt');
      window.location.href = `https://app.exponential.markets/auth?token=${encodeURIComponent(jwt!)}`;
      return;
    }

    const jwt = localStorage.getItem("jwt");
    if (!user && !jwt) {
      openAuthModal();
    }
  };

  const buttonText = {
    default: 'Early Access',
    waitlisted: 'Waitlisted',
    app: 'Go to App'
  }[buttonState];

  return (
    <Button
      size="lg"
      className="rounded-full px-6"
      onClick={handleEarlyAccessClick}
      disabled={loading || buttonState === 'waitlisted'}
    >
      {loading ? <Loader2 className="animate-spin size-4" /> : buttonText}
    </Button>
  );
};

export default EarlyAccess;