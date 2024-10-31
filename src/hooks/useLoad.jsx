import { useState } from "react";

export function useLoad(loadingValue) {
  const [isLoading, setIsLoading] = useState(loadingValue);

  function setDelay() {
    const timer = setTimeout(() => {
      setIsLoading(!loadingValue);
    }, 2000);

    return () => clearTimeout(timer);
  }

  return {isLoading, setIsLoading, setDelay};
}