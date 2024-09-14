import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import SignInSlideShow from "./SignInSlideShow";
import exponentialLogo from "@/assets/logo.svg";
import { GoogleLogin } from "@react-oauth/google";

const SignInModal = ({
  showSignInDialog,
  setShowSignInDialog,
}: {
  showSignInDialog: boolean;
  setShowSignInDialog: (show: boolean) => void;
}) => {
  return (
    <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
      <DialogTitle className="hidden" />
      <DialogOverlay className="backdrop-blur-sm bg-transparent" />
      <DialogContent className="max-w-[50vw]">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <SignInSlideShow />
          </div>
          <div className="h-full flex items-center">
            <div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src={exponentialLogo}
                    alt="Exponential Logo"
                    className="size-12"
                  />
                  <div className="flex items-center text-xl font-medium">
                    Exponential
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlock your personalized dashboard now
                </p>
              </div>
              <div className="mt-2">
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    const formData = new FormData();
                    formData.append(
                      "credential",
                      credentialResponse.credential!
                    );

                    const requestOptions = {
                      method: "POST",
                      body: formData,
                    };

                    try {
                      const response = await fetch(
                        `${import.meta.env.VITE_EXPONENTIAL_API_URL}/user/auth`,
                        requestOptions
                      );
                      const result: { token: string } = await response.json();
                      // Redirect to the dashboard app with the token as a URL parameter
                      window.location.href = `${
                        import.meta.env.VITE_EXPONENTIAL_DASHBOARD_URL
                      }/auth?token=${encodeURIComponent(result.token)}`;
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
