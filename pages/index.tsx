// ✅ 파일명: pages/index.tsx
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz");
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/MAIN.jpg")' }}
    >
      {/* START 버튼: 에펠탑 바로 아래 */}
      <div
        className="absolute"
        style={{
          bottom: "160px", // 에펠탑 기준 위치
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <button onClick={handleStart} className="focus:outline-none">
          <img
            src="/start.png"
            alt="신혼여행 진단 시작"
            className="w-[180px] hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
