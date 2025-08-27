import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포토부스 후기 - 실제 고객 이야기 | DM BOOTH",
  description:
    "웨딩·기업·축제 등 다양한 현장에서 받은 실제 후기 모음. DM BOOTH 포토부스의 품질과 운영을 확인해 보세요.",
  openGraph: {
    url: "/review",
    title: "포토부스 후기 - 실제 고객 이야기 | DM BOOTH",
    description:
      "웨딩·기업·축제 후기 모음. 현장 만족도를 확인하세요.",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/review" },
};

function JsonLd() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, url: "https://dmbooth.kr/review" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />;
}

export default function Page() {
  const reviews = [
    {
      name: "웨딩 K&S",
      text: "하객들이 너무 좋아했어요. 방명록 퀄리티 최고!",
    },
    {
      name: "기업 세미나",
      text: "브랜딩 맞춤이 깔끔했습니다. 현장 진행도 매끄러웠어요.",
    },
    {
      name: "학교 축제",
      text: "대기 줄이 길었는데도 회전이 빨랐어요!",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 space-y-10">
      <JsonLd />
      <h1 className="text-3xl md:text-4xl font-extrabold">실제 고객 후기</h1>

      <ul className="space-y-4">
        {reviews.map((r, i) => (
          <li key={i} className="p-5 rounded-2xl border bg-white">
            <p className="text-sm text-gray-500 mb-1">{r.name}</p>
            <p className="text-gray-800">{r.text}</p>
          </li>
        ))}
      </ul>

      <section className="p-6 rounded-2xl bg-gray-50">
        <h2 className="font-semibold text-lg">갤러리</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
          {["r1.jpg","r2.jpg","r3.jpg","r4.jpg","r5.jpg","r6.jpg"].map(f=>(
            <img key={f} src={`/images/review/${f}`} alt="후기 사진" className="rounded-xl border" />
          ))}
        </div>
      </section>

      <div className="flex gap-3">
        <a className="underline text-sm" href="/wedding">웨딩 서비스</a>
        <a className="underline text-sm" href="/popup">기업·축제 서비스</a>
        <a className="underline text-sm" href="/faq">FAQ</a>
      </div>
    </main>
  );
}
