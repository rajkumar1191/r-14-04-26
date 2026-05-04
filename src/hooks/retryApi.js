import { useState } from "react";

export const useRetryApi = (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (maxRetries = 3, delay = 1000) => {
    setLoading(true);
    setError(null);
    try {
      return await apiFunction();
    } catch (err) {
      if (maxRetries > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        return request(maxRetries - 1, delay);
      }

      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};
