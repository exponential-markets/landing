export const requestEarlyAccess = async (
  email: string,
  role: string,
  setIsError: (isError: boolean) => void
): Promise<boolean> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setIsError(true);
    setTimeout(() => setIsError(false), 2000);
    return false;
  }

  try {
    const response = await fetch(
      "https://exponential-waitlist.spalriwalau.workers.dev/",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, role }),
      }
    );

    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const scheduleCall = () => {
  window.open("https://exponential.markets/calendar", "_blank");
};
