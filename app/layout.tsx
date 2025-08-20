export const metadata = {
  title: "DM BOOTH — 디엠부스",
  description: "모든 이벤트에 최적화된 프리미엄 포토부스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
