import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업·축제 포토부스 - 이벤트 전문 | DM BOOTH",
  description:
    "기업 행사, 학교 축제, 팝업스토어까지! 현장 분위기를 살리는 디엠부스. 맞춤 템플릿과 빠른 출력으로 완벽한 이벤트.",
  openGraph: {
    url: "/popup",
    title: "기업·축제 포토부스 - 이벤트 전문 | DM BOOTH",
    description: "기업 행사·학교 축제·팝업스토어 맞춤 포토부스, 빠른 출력.",
    images: ["/og-main.png"],
  },
  twitter: {
    title: "기업·축제 포토부스 - 이벤트 전문",
    description: "기업 행사·학교 축제·팝업스토어 맞춤 포토부스.",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/popup" },
};

export default function Page() {
  return <main>팝업/기업 행사 페이지 컨텐츠</main>;
}
