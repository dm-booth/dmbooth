import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포토부스 후기 - 실제 고객 이야기 | DM BOOTH",
  description:
    "신랑신부부터 하객, 기업 담당자까지 극찬하는 디엠부스 포토부스! 생생한 후기와 감동적인 경험을 확인해 보세요.",
  openGraph: {
    url: "/review",
    title: "포토부스 후기 - 실제 고객 이야기 | DM BOOTH",
    description: "신랑신부부터 하객, 기업 담당자까지 극찬하는 디엠부스 포토부스 후기.",
    images: ["/og-main.png"],
  },
  twitter: {
    title: "포토부스 후기 - 실제 고객 이야기",
    description: "생생한 후기와 감동적인 경험을 확인해 보세요.",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/review" },
};

export default function Page() {
  return <main>후기 페이지 컨텐츠</main>;
}
