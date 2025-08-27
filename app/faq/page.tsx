import { Metadata } from "next";

export const metadata: Metadata = {
  title: "포토부스 자주 묻는 질문 | DM BOOTH",
  description: "대여 비용, 설치 공간/전기, 출력 수량, 예약 시기 등 DM BOOTH 포토부스 FAQ.",
  openGraph: {
    url: "/faq",
    title: "포토부스 자주 묻는 질문 | DM BOOTH",
    description: "비용, 공간/전기, 출력 수량, 예약 시기 등 핵심 FAQ 모음.",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/faq" },
};

function JsonLd() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "설치에 필요한 공간/전기는?",
        acceptedAnswer: { "@type": "Answer", text: "2×2m 권장, 220V 콘센트 1구면 충분합니다." },
      },
      {
        "@type": "Question",
        name: "기본 시간과 출력 수량은 어떻게 되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "기본 시간은 1시간 30분(1.5시간)이며, 이 경우 출력은 무제한으로 제공합니다. " +
            "행사를 3시간 이상으로 진행하실 경우에는 기본 800장을 기준으로 하며, 이후부터는 필름 추가 비용이 발생합니다. " +
            "실제 운영 경험상 3시간 동안 꾸준히 사람이 몰려도 800장을 모두 소진하기는 어려웠습니다. " +
            "대부분의 웨딩·기업 행사에서는 기본 제공량만으로 충분히 이용 가능합니다.",
        },
      },
      {
        "@type": "Question",
        name: "예약은 얼마나 전에 해야 하나요?",
        acceptedAnswer: { "@type": "Answer", text: "한 달 전 권장. 급한 일정도 문의 주시면 가능 여부 안내드립니다." },
      },
      {
        "@type": "Question",
        name: "템플릿 디자인은 어떻게 진행되나요?",
        acceptedAnswer: { "@type": "Answer", text: "행사 컨셉/컬러/로고/문구를 받아 1:1 맞춤으로 제작, 사전 확정 후 진행합니다." },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />;
}

export default function Page() {
  const qa: [string, string][] = [
    ["설치에 필요한 공간/전기는?", "2×2m 권장, 220V 콘센트 1구면 충분합니다."],
    [
      "기본 시간과 출력 수량은 어떻게 되나요?",
      `기본 시간은 1시간 30분(1.5시간)이며, 이 경우 출력은 무제한으로 제공됩니다.
       행사를 3시간 이상으로 진행하실 경우에는 기본 800장을 기준으로 하며, 이후부터는 필름 추가 비용이 발생합니다.
       실제 운영 경험상 3시간 동안 꾸준히 사람이 몰려도 800장을 모두 사용하는 경우는 드뭅니다.
       그래서 대부분의 웨딩·기업 행사에서는 기본 제공량만으로 충분히 즐기실 수 있습니다.`,
    ],
    ["예약은 얼마나 전에 해야 하나요?", "한 달 전 권장. 급한 일정도 문의 주시면 가능 여부를 안내드립니다."],
    ["템플릿 디자인은 어떻게 진행되나요?", "행사 컨셉/컬러/로고/문구를 받아 1:1 맞춤으로 제작, 사전 확정 후 진행합니다."],
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 space-y-8">
      <JsonLd />
      <h1 className="text-3xl md:text-4xl font-extrabold">자주 묻는 질문</h1>

      <div className="space-y-3">
        {qa.map(([q, a]) => (
          <details key={q} className="p-4 rounded-2xl border bg-white">
            <summary className="cursor-pointer font-semibold">{q}</summary>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{a}</p>
          </details>
        ))}
      </div>

      <div className="flex gap-3 pt-4">
        <a className="underline text-sm" href="/wedding">웨딩 서비스</a>
        <a className="underline text-sm" href="/popup">기업·축제 서비스</a>
        <a className="underline text-sm" href="/review">후기</a>
        <a className="underline text-sm" href="/">홈으로</a>
      </div>
    </main>
  );
}
