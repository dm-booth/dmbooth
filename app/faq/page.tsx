import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포토부스 자주 묻는 질문 | DM BOOTH",
  description:
    "대여 비용, 필름 수량, 콘센트 조건 등 DM BOOTH 포토부스 FAQ를 통해 궁금증을 해결하세요.",
  openGraph: {
    url: "/faq",
    title: "포토부스 자주 묻는 질문 | DM BOOTH",
    description: "대여 비용, 필름 수량, 콘센트 조건 등 자주 묻는 질문 정리.",
    images: ["/og-main.png"],
  },
  twitter: {
    title: "포토부스 자주 묻는 질문",
    description: "DM BOOTH 포토부스 FAQ로 궁금증 해결!",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/faq" },
};

export default function Page() {
  return <main>FAQ 페이지 컨텐츠</main>;
}
