// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "DM BOOTH — 디엠부스",
    template: "%s | DM BOOTH",
  },
  description: "모든 이벤트에 최적화된 프리미엄 포토부스",
  metadataBase: new URL("https://dmbooth.kr"),
  openGraph: {
    title: "DM BOOTH — 디엠부스",
    description: "모든 이벤트에 최적화된 프리미엄 포토부스",
    url: "https://dmbooth.kr",
    siteName: "DM BOOTH",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "DM BOOTH" }], // public/og.jpg 업로드 권장
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DM BOOTH — 디엠부스",
    description: "모든 이벤트에 최적화된 프리미엄 포토부스",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" }, // 있으면 사용
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="793e2a0b6925f3c950dee0195d9be8523983677c"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dmbooth.kr" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
