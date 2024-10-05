import TranslateForm from "../../components/TranslateForm";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">DeepL Translator</h1>
      <TranslateForm />
      <Link href="/add">Add Pageに行く</Link>
    </div>
  );
};

export default Home;
