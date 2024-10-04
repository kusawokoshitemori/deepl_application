// src/hooks/useTranslate.ts

import { useState } from "react";

interface UseTranslateReturn {
  translatedText: string;
  translate: (text: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useTranslate = (): UseTranslateReturn => {
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translate = async (text: string) => {
    setIsLoading(true);
    setError(null);
    setTranslatedText("");

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("翻訳に失敗しました");
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (err: unknown) {
      // 型を 'unknown' に変更
      if (err instanceof Error) {
        setError(err.message || "予期せぬエラーが発生しました");
      } else {
        setError("予期せぬエラーが発生しました");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { translatedText, translate, isLoading, error };
};
