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
      {/* 최종 리터치된 start.png 버튼 - 에펠탑 아래 */}
      <div
        className="absolute"
        style={{
          bottom: "150px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <button onClick={handleStart} className="focus:outline-none">
          <img
            src="/start-v2.png"
            alt="시작 버튼"
            className="w-[196px] hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
