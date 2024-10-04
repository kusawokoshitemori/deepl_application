// src/components/TranslateForm.tsx

import { useState } from "react";
import { useTranslate } from "../hooks/useTranslate";

const TranslateForm: React.FC = () => {
  const [text, setText] = useState("");
  const { translatedText, translate, isLoading, error } = useTranslate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      await translate(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="翻訳したいテキストを入力してください"
        className="w-full p-2 border rounded mb-4"
        rows={5}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? "翻訳中..." : "翻訳"}
      </button>
      {translatedText && (
        <div className="mt-4 p-4 bg-green-100 border rounded">
          <h2 className="text-xl font-semibold mb-2">翻訳結果:</h2>
          <p>{translatedText}</p>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 border rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
    </form>
  );
};

export default TranslateForm;
