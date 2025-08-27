import type { Metadata } from "next";

/** ====== SEO ====== */
export const metadata: Metadata = {
  title: "웨딩 포토부스 - 결혼식을 오래 기억남게 | DM BOOTH",
  description:
    "웨딩 포토부스 전문. 방명록·액자 제공, 맞춤 템플릿, 대표 직접 진행으로 하객 만족도를 높입니다. 수원/서울/경기 지역 행사 운영.",
  openGraph: {
    url: "/wedding",
    title: "웨딩 포토부스 - 결혼식을 오래 기억남게 | DM BOOTH",
    description:
      "방명록·액자 제공, 맞춤 템플릿, 대표 직접 진행. 수원/서울/경기 웨딩 포토부스.",
    images: ["/og-main.png"],
  },
  twitter: {
    title: "웨딩 포토부스 - 결혼식을 오래 기억남게",
    description:
      "방명록·액자 제공, 맞춤 템플릿, 대표 직접 진행.",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/wedding" },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "웨딩 포토부스",
    provider: { "@type": "Organization", name: "DM BOOTH" },
    areaServed: ["Seoul", "Gyeonggi-do", "Suwon"],
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "설치 공간과 전기는 어떻게 필요하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2×2m 권장, 220V 콘센트 1구면 충분합니다.",
        },
      },
      {
        "@type": "Question",
        name: "기본 이용 시간과 출력 수는 어떻게 되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "기본 2시간, 무제한 출력으로 진행합니다. 옵션에 따라 연장 가능.",
        },
      },
      {
        "@type": "Question",
        name: "템플릿은 커스텀 가능한가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "웨딩 컨셉/컬러에 맞게 1:1 커스텀 제작합니다.",
        },
      },
    ],
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://dmbooth.kr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "웨딩 포토부스",
        item: "https://dmbooth.kr/wedding",
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

/** ====== PAGE ====== */
export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14 space-y-14">
      <JsonLd />
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold">웨딩 포토부스</h1>
        <p className="text-gray-600">
          방명록·액자 제공 · 맞춤 템플릿 · 대표 직접 진행
        </p>
        <img
          src="/images/wedding-hero.jpg"
          alt="DM BOOTH 웨딩 포토부스"
          className="w-full rounded-2xl shadow"
        />
        <a href="/#contact" className="inline-block mt-4 px-6 py-3 rounded-2xl bg-black text-white">
          웨딩 문의하기
        </a>
      </section>

      {/* Points */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          ["맞춤 템플릿", "컨셉·컬러에 맞춘 1:1 디자인"],
          ["포토 방명록", "하객 메시지 앨범 제공(옵션 가능)"],
          ["운영 퀄리티", "대표 상주 진행으로 안정적인 서비스"],
        ].map(([t, d]) => (
          <div key={t} className="p-6 rounded-2xl border">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm text-gray-600 mt-1">{d}</p>
          </div>
        ))}
      </section>

      {/* Pricing (range) */}
      <section className="p-6 rounded-2xl bg-gray-50">
        <h2 className="font-semibold text-lg">가격 안내</h2>
        <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
          <li>기본 2시간 / 무제한 출력 / 스태프 2인</li>
          <li>지역·옵션에 따라 변동됩니다. 정확한 견적은 문의 주세요.</li>
        </ul>
      </section>

      {/* Gallery (replace with 실제 사진) */}
      <section className="space-y-3">
        <h2 className="font-semibold text-lg">샘플 갤러리</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["w1.jpg", "w2.jpg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg"].map((f) => (
            <img key={f} src={`/images/wedding/${f}`} alt="웨딩 포토부스 샘플" className="rounded-xl border" />
          ))}
        </div>
      </section>

      {/* Reviews (짧은 인용) */}
      <section className="space-y-2">
        <h2 className="font-semibold text-lg">실제 후기</h2>
        <blockquote className="p-4 rounded-2xl border text-sm text-gray-700">
          “하객들이 줄 서서 찍었어요. 방명록이 특히 감동이었습니다.”
          <span className="block text-gray-500 mt-1">— 신부 K</span>
        </blockquote>
      </section>

      {/* Internal Links */}
      <section className="flex gap-3">
        <a className="underline text-sm" href="/review">후기 보기</a>
        <a className="underline text-sm" href="/faq">FAQ</a>
        <a className="underline text-sm" href="/">홈으로</a>
      </section>
    </main>
  );
}
