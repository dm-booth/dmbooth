// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DM BOOTH — 디엠부스",
  description: "모든 이벤트에 최적화된 프리미엄 포토부스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="793e2a0b6925f3c950dee0195d9be8523983677c"
        />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
