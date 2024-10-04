// pages/api/translate.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { translateText } from "../../utils/deeplApi";

interface TranslateRequestBody {
  text: string;
}

interface TranslateResponse {
  translatedText: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TranslateResponse | { error: string }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { text } = req.body as TranslateRequestBody;

  if (!text) {
    return res.status(400).json({ error: "テキストが提供されていません" });
  }

  try {
    const translatedText = await translateText(text, "EN"); // 'EN'は翻訳先の言語コード
    return res.status(200).json({ translatedText });
  } catch (error: unknown) {
    // 型を 'unknown' に変更
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    // エラーが予想外の場合
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
