// ✅ 파일명: quiz.tsx (단계별 퀴즈 버전)
import { useState } from \"react\";
import { useRouter } from \"next/router\";
import { addDoc, collection, Timestamp } from \"firebase/firestore\";
import { db } from \"../firebase\";
import CommonButton from '@/components/CommonButton';

const questions = [
  {
    id: \"mood\",
    text: \"💬 여행의 분위기로 가장 끌리는 건?\",
    options: [
      { value: \"calm\", label: \"🧘 조용하고 편안함\" },
      { value: \"exciting\", label: \"🎉 활기차고 신나는 분위기\" },
      { value: \"relaxing\", label: \"🛌 느긋하고 여유로운 시간\" },
      { value: \"exploring\", label: \"🧭 새로운 곳을 탐험하는 즐거움\" },
      { value: \"watching\", label: \"🎫 공연이나 스포츠 관람의 짜릿함\" },
      { value: \"interactive\", label: \"🤹 직접 체험하고 참여하는 재미\" }
    ]
  },
  {
    id: \"place\",
    text: \"📍 주로 떠나고 싶은 장소는?\",
    options: [
      { value: \"beach\", label: \"🏝 바닷가\" },
      { value: \"forest\", label: \"🌲 숲/자연\" },
      { value: \"city\", label: \"🏙 도심\" },
      { value: \"aurora\", label: \"🌌 오로라/극지방\" },
      { value: \"island\", label: \"🌋 이국적인 섬\" },
      { value: \"historical\", label: \"🏰 유적지/역사적 명소\" }
    ]
  },
  {
    id: \"activity\",
    text: \"🔥 여행 중 가장 기대되는 건?\",
    options: [
      { value: \"adventure\", label: \"🧭 모험과 탐험\" },
      { value: \"healing\", label: \"🧘 조용한 휴식\" },
      { value: \"urban\", label: \"🛍 도시 감성/쇼핑\" },
      { value: \"sports\", label: \"⚽ 스포츠 또는 공연 관람\" },
      { value: \"luxury\", label: \"💎 럭셔리 휴식\" },
      { value: \"romantic\", label: \"💑 로맨틱 감성\" },
      { value: \"snap\", label: \"📸 인생샷/감성 스냅\" },
      { value: \"custom\", label: \"🎨 나만의 커스텀 여행 만들기\" }
    ]
  },
  {
    id: \"style\",
    text: \"🏨 어떤 숙소 스타일을 원하세요?\",
    options: [
      { value: \"luxury\", label: \"💎 고급스러운 풀빌라/리조트\" },
      { value: \"cozy\", label: \"🏡 아늑하고 감성적인 숙소\" },
      { value: \"simple\", label: \"💰 실속형 숙소\" },
      { value: \"local\", label: \"🍱 현지 느낌 물씬 나는 로컬 숙소\" },
      { value: \"nature\", label: \"🌿 자연 속 글램핑/캠핑\" },
      { value: \"design\", label: \"🎨 독특한 감성 디자인 숙소\" }
    ]
  },
  {
    id: \"entertainment\",
    text: \"🎫 손흥민 경기, 이정후 메이저리그, 콘서트 관람 등 스포츠/공연 투어에 관심 있으신가요?\",
    options: [
      { value: \"premierleague\", label: \"⚽ 손흥민 경기 투어\" },
      { value: \"mlb\", label: \"⚾ 이정후 메이저리그 경기\" },
      { value: \"kpop\", label: \"🎤 KPOP 콘서트/뮤직페스티벌\" },
      { value: \"classic\", label: \"🎻 오페라/클래식 공연\" },
      { value: \"tennis\", label: \"🎾 윔블던/그랜드슬램 경기\" },
      { value: \"none\", label: \"❌ 관심 없음\" }
    ]
  }
];

// (resultMapping 및 기타 로직 생략 - 기존 그대로 유지)

export default function Quiz() {
  // (기존 상태관리와 로직 생략 - 기존 그대로 유지)

  return (
    <div className=\"min-h-screen bg-gradient-to-br from-rose-100 via-white to-sky-100 flex flex-col items-start justify-start px-6 py-10 max-w-2xl mx-auto\">
      {/* (기존 UI 생략 - 기존 그대로 유지) */}
      <div className=\"mt-24 mb-12 text-left w-full\">
        <CommonButton
          text={current === questions.length - 1 ? \"결과 보기 ✨\" : \"다음 →\"}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}
