// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dmbooth.kr"),
  title: { default: "DM BOOTH - 웨딩·기업 행사 프리미엄 포토부스", template: "%s | DM BOOTH" },
  description:
    "웨딩, 기업행사, 축제 어디든 완벽한 프리미엄 포토부스! 맞춤 템플릿과 방명록 제공, 대표의 현장 진행으로 최고의 만족을 선사합니다.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "DM BOOTH",
    title: "DM BOOTH - 웨딩·기업 행사 프리미엄 포토부스",
    description:
      "웨딩, 기업행사, 축제 어디든 완벽한 프리미엄 포토부스! 맞춤 템플릿, 방명록 제공, 대표의 현장 진행.",
    images: ["/og-main.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM BOOTH - 웨딩·기업 행사 프리미엄 포토부스",
    description: "웨딩, 기업행사, 축제 어디든 완벽!",
    images: ["/og-main.png"],
  },
  alternates: { canonical: "https://dmbooth.kr/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
