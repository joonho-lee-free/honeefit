import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const goToQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white text-center text-gray-800">
      <h1 className="text-2xl font-medium mb-2">기회는 단 한 번 !</h1>
      <h2 className="text-4xl font-bold text-blue-600 mb-6">내게 꼭 맞는 신혼여행지</h2>
      <button
        onClick={goToQuiz}
        className="text-white bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition"
      >
        MBTI 유형별 신혼여행 진단하기 →
      </button>
    </div>
  );
}
