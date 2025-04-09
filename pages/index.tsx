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
      {/* START 버튼 이미지: 위치/크기 정확히 조정 */}
      <div className="absolute" style={{
        bottom: "100px",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
        <button onClick={handleStart} className="focus:outline-none">
          <img
            src="/START.png"
            alt="START"
            className="w-[240px] hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
