"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// seedFirestore.ts
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
// 🔧 CommonJS 방식으로 JSON 불러오기
const serviceAccount = require("./firebase-key.json");
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccount),
});
const db = (0, firestore_1.getFirestore)();
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
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        const batch = db.batch();
        seedData.forEach((item) => {
            const ref = db.collection("honeymoonTypes").doc(item.id);
            batch.set(ref, {
                title: item.title,
                description: item.description,
                recommendedCities: item.recommendedCities,
            });
        });
        yield batch.commit();
        console.log("✅ Firestore 초기 데이터 업로드 완료!");
    });
}
seed();
