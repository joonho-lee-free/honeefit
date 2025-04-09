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
      {/* 위에 올릴 버튼 이미지 */}
      <div
        className="absolute"
        style={{
          bottom: "90px", // 버튼 위치 조정
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <button onClick={handleStart} className="focus:outline-none">
          <img
            src="/start.jpg"
            alt="시작 버튼"
            className="w-[180px] hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
