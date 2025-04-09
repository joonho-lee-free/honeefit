import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-100 to-white text-center px-4">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">허니핏 ✈️</h1>
      <p className="text-xl text-gray-700 mb-8">당신에게 딱 맞는 신혼여행을 찾아드릴게요 💑</p>
      <Link href="/quiz" className="px-8 py-4 bg-pink-500 text-white text-lg rounded-full shadow-lg hover:bg-pink-600 transition">
        퀴즈 시작하기 💡
      </Link>
    </main>
  );
}
