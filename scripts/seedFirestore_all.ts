import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const serviceAccount: any = require("./firebase-key.json"); // ✅ 타입 명시

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const seedData = require("./honeymoonTypes_seed_all.json");

async function seed() {
  const batch = db.batch();
  seedData.forEach((item: any) => {
    const ref = db.collection("honeymoonTypes").doc(item.id);
    batch.set(ref, {
      title: item.title,
      description: item.description,
      recommendedCities: item.recommendedCities,
    });
  });

  await batch.commit();
  console.log("✅ 9개 유형 Firestore 문서 자동 업로드 완료!");
}

seed();
