// ✅ 파일명: seedFirestore_custom_trip.ts
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const serviceAccount = require("./firebase-key.json"); // 🔧 import 대신 require 사용

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const seedData = [
  {
    id: "custom_trip",
    title: "🎨 나만의 커스텀 허니문",
    description: "세상에 단 하나뿐인 당신만의 여행을 설계해보세요. 원하는 테마와 스타일로 맞춤형 여행지를 추천해드려요!",
    recommendedCities: [
      {
        name: "당신의 상상 속 여행지",
        image: "https://example.com/custom-dream.jpg",
        summary: "직접 구성한 일정과 스타일로 만드는 특별한 허니문",
        productId: "custom_001"
      },
      {
        name: "어디든 자유롭게",
        image: "https://example.com/anywhere.jpg",
        summary: "테마, 예산, 일정 모두 맞춤형으로 구성해보세요",
        productId: "custom_002"
      }
    ]
  }
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
  console.log("✅ Firestore custom_trip 데이터 업로드 완료!");
}

seed();
