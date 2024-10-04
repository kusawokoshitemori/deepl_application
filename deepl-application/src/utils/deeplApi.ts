// src/utils/deeplApi.ts

export interface DeepLResponse {
  translations: { detected_source_language: string; text: string }[];
}

export const translateText = async (
  text: string,
  targetLang: string = "EN"
): Promise<string> => {
  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `DeepL-Auth-Key ${process.env.NEXT_PUBLIC_DEEPL_API_KEY}`,
    },
    body: new URLSearchParams({
      text,
      target_lang: targetLang,
    }),
  });

  if (!response.ok) {
    throw new Error("DeepL API へのリクエストが失敗しました");
  }

  const data: DeepLResponse = await response.json();
  return data.translations[0].text;
};
