// seedFirestore.ts
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// 🔧 CommonJS 방식으로 JSON 불러오기
const serviceAccount = require("./firebase-key.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const seedData = [
  {
    id: "adventure_city_night",
    title: "모험 + 도심 감성 커플에게 추천 💥🌃",
    description: "도시 속에서 짜릿한 체험을 하고 싶은 커플이라면 여기를 주목!",
    recommendedCities: [
      {
        name: "뉴욕",
        image: "https://example.com/nyc.jpg",
        summary: "끝없는 모험과 야경의 도시",
        productId: "nyc_001",
      },
      {
        name: "도쿄",
        image: "https://example.com/tokyo.jpg",
        summary: "24시간 살아 있는 거리와 모험",
        productId: "tokyo_002",
      },
    ],
  },
  {
    id: "healing_sunset_beach",
    title: "감성+휴양형 커플에게 추천 💕",
    description: "힐링과 감성을 동시에! 이 도시들을 만나보세요.",
    recommendedCities: [
      {
        name: "몰디브",
        image: "https://example.com/maldives.jpg",
        summary: "꿈같은 수중 리조트와 맑은 바다",
        productId: "maldives_001",
      },
      {
        name: "발리",
        image: "https://example.com/bali.jpg",
        summary: "감성과 모험의 조화",
        productId: "bali_002",
      },
    ],
  },
];

async function seed() {
  const batch = db.batch();
  seedData.forEach((item) => {
    const ref = db.collection("honeymoonTypes").doc(item.id);
    batch.set(ref, {
      title: item.title,
      description: item.description,
      recommendedCities: item.recommendedCities,
    });
  });

  await batch.commit();
  console.log("✅ Firestore 초기 데이터 업로드 완료!");
}

seed();
