import { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업·축제 포토부스 - 이벤트 전문 | DM BOOTH",
  description:
    "기업 행사, 학교 축제, 팝업스토어 전문 포토부스. 맞춤 브랜딩, 빠른 회전, 안정적인 운영으로 현장 만족도를 높입니다.",
  openGraph: {
    url: "/popup",
    title: "기업·축제 포토부스 - 이벤트 전문 | DM BOOTH",
    description:
      "브랜딩 커스텀 · 빠른 회전 · 안정 운영. 기업·축제·팝업스토어 포토부스.",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/popup" },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "기업/축제 포토부스",
    provider: { "@type": "Organization", name: "DM BOOTH" },
    areaServed: ["Seoul", "Gyeonggi-do"],
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://dmbooth.kr/" },
      { "@type": "ListItem", position: 2, name: "기업·축제 포토부스", item: "https://dmbooth.kr/popup" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 space-y-14">
      <JsonLd />

      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">기업·축제 포토부스</h1>
          <p className="text-gray-600 mt-2">브랜딩 커스텀 · 빠른 회전 · 안정적인 운영</p>
          <a href="/#contact" className="inline-block mt-4 px-6 py-3 rounded-2xl bg-black text-white">
            행사 상담하기
          </a>
        </div>
        <img src="/images/popup-hero.jpg" alt="기업/축제 포토부스" className="w-full rounded-2xl shadow" />
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          ["브랜딩", "로고·배너·필름 템플릿 커스텀"],
          ["처리 속도", "행사 규모에 맞춘 빠른 회전"],
          ["데이터", "참여 수/인쇄 수 통계 제공(요청 시)"],
        ].map(([t, d]) => (
          <div key={t} className="p-6 rounded-2xl border">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm text-gray-600 mt-1">{d}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-semibold text-lg mb-3">현장 스냅</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["p1.jpg","p2.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg"].map(f=>(
            <img key={f} src={`/images/popup/${f}`} alt="행사 현장 사진" className="rounded-xl border" />
          ))}
        </div>
      </section>

      <section className="flex gap-3">
        <a className="underline text-sm" href="/review">후기 보기</a>
        <a className="underline text-sm" href="/faq">FAQ</a>
        <a className="underline text-sm" href="/">홈으로</a>
      </section>
    </main>
  );
}
