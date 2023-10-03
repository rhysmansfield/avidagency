import { useState } from "react";
import { useReCaptcha } from "next-recaptcha-v3";

type FetchProps = {
  method?: "GET" | "POST";
  url: string;
  body: { [key: string]: any };
  headers?: RequestInit["headers"];
};

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<{ [key: string]: any } | null>(null);
  const { executeRecaptcha } = useReCaptcha();

  const perform = async ({
    method = "GET",
    url,
    body,
    headers = { "Content-Type": "application/json" },
  }: FetchProps) => {
    setLoading(true);
    setError(null);
    setData(null);

    const token = await executeRecaptcha("form_submit");
    body["recaptcha"] = token || "";

    try {
      const request = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      });

      const response = await request.json();

      if (!request.ok) {
        setLoading(false);
        setError(response.message);
        setData(null);
        return;
      }

      setLoading(false);
      setError(null);
      setData(response);
    } catch (error: any) {
      setLoading(false);
      setError(error);
      setData(null);
    }
  };

  return { loading, error, data, perform };
};
