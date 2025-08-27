import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "웨딩 포토부스 - 결혼식을 오래 기억남게 | DM BOOTH",
  description:
    "신랑신부와 하객 모두가 극찬하는 웨딩 포토부스! 포토 방명록과 액자 제공, 감동적인 순간을 추억으로 남기는 DM BOOTH.",
  openGraph: {
    url: "/wedding",
    title: "웨딩 포토부스 - 결혼식을 오래 기억남게 | DM BOOTH",
    description: "신랑신부와 하객 모두가 극찬하는 웨딩 포토부스! 방명록, 액자 제공.",
    images: ["/og-main.png"],
  },
  twitter: {
    title: "웨딩 포토부스 - 결혼식을 오래 기억남게",
    description: "신랑신부와 하객 모두가 만족하는 웨딩 포토부스!",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/wedding" },
};

export default function Page() {
  return <main>웨딩 페이지 컨텐츠</main>;
}
