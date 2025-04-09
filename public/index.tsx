import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/MAIN.jpg")' }}
    >
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleStartQuiz}
          className="flex items-center bg-white text-pink-600 font-semibold text-sm px-6 py-3 rounded-full shadow-md hover:bg-pink-50 transition"
        >
          <span className="mr-2">🔍</span> MBTI 유형별 신혼여행진단기
        </button>
      </div>
    </div>
  );
}
