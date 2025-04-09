import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

interface City {
  name: string;
  image: string;
  summary: string;
  productId: string;
}

export default function Result() {
  const router = useRouter();
  const { type } = router.query;
  const [cities, setCities] = useState<City[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!type) return;

    const fetchData = async () => {
      const docRef = doc(db, "honeymoonTypes", String(type));
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCities(data.recommendedCities || []);
        setTitle(data.title || "");
        setDescription(data.description || "");
      } else {
        setTitle("추천 결과를 찾을 수 없어요 😢");
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">추천 여행지 ✈️</h1>
      {title && <h2 className="text-xl text-center mb-2 font-semibold">{title}</h2>}
      {description && <p className="text-center mb-8 text-gray-600">{description}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cities.map((city) => (
          <div key={city.productId} className="border rounded-2xl shadow-lg overflow-hidden">
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-600 mb-2">{city.name}</h3>
              <p className="text-gray-700 mb-4">{city.summary}</p>
              <button
                onClick={() => router.push(`/product?id=${city.productId}`)}
                className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              >
                일정 보기 🗓
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
