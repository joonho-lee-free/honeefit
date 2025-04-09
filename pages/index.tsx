// ✅ 파일명: pages/index.tsx
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
      {/* START 버튼 이미지 */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
        <button onClick={handleStartQuiz} className="focus:outline-none">
          <img
            src="/START.png"
            alt="MBTI 유형별 신혼여행진단기"
            className="w-60 sm:w-72 hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
