import React from "react";
import CommonButton from "@/components/CommonButton"; // 공통 버튼 불러오기
import { useRouter } from "next/router";
import { FaRegLightbulb } from "react-icons/fa"; // 아이콘 추가

export default function IndexPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/quiz"); // 퀴즈 시작 페이지로 이동
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-white to-blue-200 flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">기회는 단 한번! 신혼여행~ ✨ 허니핏 여행 퀴즈</h1>
      <p className="text-xl text-center text-gray-700 mb-8">당신만의 맞춤 신혼여행을 찾기 위한 퀴즈입니다. 시작해볼까요? 💕</p>
      <CommonButton 
        text="MBTI 유형별 여행지 찾기" 
        onClick={handleStart}
        icon={<FaRegLightbulb />} // 아이콘 추가
      />
    </div>
  );
}
