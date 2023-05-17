import requestManager from "@/lib/requestManager";
import { useEffect, useState } from "react";

export function useRequest(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    requestManager
      .get(url)
      .then((response) => {
        if (mounted) {
          setData(response.data);
        }
      })
      .catch((error) => {
        if (mounted) {
          setError(error);
        }
      });

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, error };
}
