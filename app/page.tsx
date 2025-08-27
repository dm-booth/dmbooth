import React from "react";
import type { Metadata } from "next";
import {
  Camera,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  CheckCircle2,
} from "lucide-react";
export const metadata: Metadata = {
  title: "웨딩·이벤트 포토부스 | 디엠부스 DM BOOTH",
  description:
    "웨딩·기업행사·학교축제 전문 포토부스. 가을 이벤트 35만원~, 대표 현장 진행, 고품질 인화·방명록·템플릿 커스터마이징, 빠른 설치·전국 진행.",
  keywords: [
    "웨딩 포토부스",
    "행사 포토부스",
    "이벤트 포토부스",
    "기업행사 포토부스",
    "학교 축제 포토부스",
    "팝업스토어 포토부스",
    "디엠부스",
    "DM BOOTH",
  ],
  openGraph: {
    title: "웨딩·이벤트 포토부스 | 디엠부스 DM BOOTH",
    description:
      "웨딩·기업행사·학교축제 전문 포토부스. 가을 이벤트 35만원~, 대표 현장 진행, 고품질 인화·방명록·템플릿 커스터마이징.",
    url: "https://dmbooth.kr",
    siteName: "DM BOOTH",
    locale: "ko_KR",
    type: "website",
    images: [{ 
       url: "https://dmbooth.kr/og-main.png", // ✅og(미리보기나오는이미지) 절대경로 + 확장자 확인
       width: 1200,
       height: 630,
       alt: "DM BOOTH 대표 이미지",
     }],

  },
};

// DM BOOTH — Landing Page (Wedding/Popup added)
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#hero" className="font-extrabold tracking-tight text-xl">
            DM BOOTH
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:opacity-70">서비스</a>
            <a href="#templates" className="hover:opacity-70">템플릿</a>
            <a href="#wedding" className="hover:opacity-70">웨딩</a>
            <a href="#popup" className="hover:opacity-70">팝업</a>
            <a href="#gallery" className="hover:opacity-70">갤러리</a>
            <a href="#pricing" className="hover:opacity-70">가격</a>
            <a href="#reviews" className="hover:opacity-70">후기</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </nav>
          <div className="flex gap-2">
            <a
              href="https://pf.kakao.com/_xahXAn/chat"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin-when-cross-origin"
              className="px-4 py-2 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
            >
              예약 문의
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Autumn Event ~ 11/31
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            사진은 순간을 남기고,<br /> <span className="text-pink-600">디엠부스</span>는 그 순간을 완성합니다.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            웨딩 · 기업행사 · 팝업스토어 · 학교축제 · 연말시상식까지.
            <br className="hidden md:block" /> 모든 이벤트에 최적화된 프리미엄 포토부스.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-800"
            >
              패키지 보기
            </a>
            <a
              href="https://www.instagram.com/DM_BOOTH"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin-when-cross-origin"
              className="px-6 py-3 rounded-2xl border border-gray-300 font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <Instagram className="w-4 h-4" /> @DM_BOOTH
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 max-w-md mx-auto text-sm text-gray-600">
            <div className="py-3 border-r">
              연간 행사 <span className="font-bold text-gray-900">200+</span>
            </div>
            <div className="py-3 border-r">
              만족도 <span className="font-bold text-gray-900">4.9/5</span>
            </div>
            <div className="py-3">
              템플릿 <span className="font-bold text-gray-900">100+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">📍왜 디엠부스인가요?</h2>
          <p className="text-gray-600 mt-3">현장에서 바로 느껴지는 차이를 제공합니다.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Card title="대표 직접 운영" icon={<ShieldCheck className="w-5 h-5" />}>
              수년간 현장에서 경력을 쌓은 대표가 <strong className="font-semibold text-gray-900">직접 운영 · 진행 · 촬영 유도</strong>와 분위기 리딩까지 책임집니다.
            </Card>
            <Card title="빠른 출력" icon={<Camera className="w-5 h-5" />}>
              고사양 장비로 대기 최소화. 많은 하객이 몰려도 끊김 없이 쾌적합니다.
            </Card>
            <Card title="완전 커스터마이징" icon={<Sparkles className="w-5 h-5" />}>
              템플릿/로고/컬러/문구까지 행사 컨셉에 맞게 1:1 맞춤 제작합니다.
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card title="웨딩 방명록&액자 제공" icon={<Mail className="w-5 h-5" />}>
              액자 & 포토 방명록과 스티커, 펜까지 풀세트로 제공하여 추억을 더합니다.
            </Card>
            <Card title="모든 행사 맞춤" icon={<Clock className="w-5 h-5" />}>
              웨딩, 기업행사, 학교축제, 팝업까지. 규모와 장소에 맞춰 구성합니다.
            </Card>
            <Card title="안정 전원 & 설치" icon={<MapPin className="w-5 h-5" />}>
              반경 10m 내 콘센트만 있으면 OK. 깔끔한 동선과 안전하게 세팅합니다.
            </Card>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">📍인기 템플릿</h2>
              <p className="text-gray-600 mt-3">2X6필름, 2컷/4컷, 드로잉/모던 스타일 등 행사에 맞게 추천드립니다.</p>
            </div>
            <a href="#contact" className="hidden md:inline-block text-sm font-semibold underline underline-offset-4">
              전체 템플릿 요청하기
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
            {[
              { src: "/2X6-film.png", name: "필름 2x6" },
              { src: "/custom-2cut.png", name: "2컷 클래식" },
              { src: "/custom-4cut.png", name: "커스텀드로잉 4컷" },
            ].map((t, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border bg-white">
                {/* 이미지 박스 */}
                <div className="aspect-[2/3] bg-gray-100 flex items-center justify-center p-2">
                  <img src={t.src} alt={t.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                {/* 하단 텍스트 */}
                <div className="p-4 flex items-center justify-between">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100">커스텀 가능</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding — 좌측 큰 사진 + 우측 목록 */}
      <section id="wedding" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
            <img src="/wedding-main.jpg" alt="웨딩 포토부스 샘플" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">웨딩</h2>
            <p className="text-gray-600 mt-3">순백/모던/빈티지 컨셉에 맞춘 추천 구성.</p>

            <ul className="mt-6 space-y-3">
              {[
                "스태프2인 · 무제한 인화",
                "웨딩 방명록 · 액자 · 스티커 제공",
                "하객 대기 최소화 운영(고사양 장비)",
                "로고/초성/컬러 완전 커스터마이징",
                "다양한 촬영소품 · 원본파일 제공",
              ].map((txt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5" />
                  <span className="text-gray-800">{txt}</span>
                </li>
              ))}
            </ul>

            {/* 웨딩 섹션: 작은 가로형 이미지 3개 */}
<div className="flex gap-3 sm:gap-6 mt-6 justify-center">
  <img
    src="/wedding-side1.jpg"
    alt="웨딩 보조이미지 1"
    className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover rounded-lg shadow"
  />
  <img
    src="/wedding-side2.jpg"
    alt="웨딩 보조이미지 2"
    className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover rounded-lg shadow"
  />
  <img
    src="/wedding-side3.jpg"
    alt="웨딩 보조이미지 3"
    className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover rounded-lg shadow"
  />
</div>

          </div>
        </div>
      </section>

     {/* Popup — 좌측 큰 사진 + 우측 목록 */}
<section id="popup" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
    
    {/* 좌측 큰 이미지 */}
    <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
      <img src="/popup-main.jpg" alt="팝업/프로모션 포토부스 샘플" className="w-full h-full object-cover" />
    </div>

    {/* 우측 텍스트 + 보조 이미지 */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">팝업</h2>
      <p className="text-gray-600 mt-3">브랜드 프로모션/체험형 이벤트에 최적화.</p>

      <ul className="mt-6 space-y-3">
        {[
          "브랜딩 템플릿 2종 · 로고/폰트/메시지 반영",
          "QR 다운로드 · SNS 업로드 유도 문구",
          "배경/사인물/스탠드 등 현장 연출 옵션",
          "데이터 리포트(촬영 수·피크타임) 제공",
        ].map((txt, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5" />
            <span className="text-gray-800">{txt}</span>
          </li>
        ))}
      </ul>

      {/* 팝업 섹션: 작은 가로형 이미지 3개 */}
      <div className="flex gap-3 sm:gap-6 mt-6 justify-center">
        <img src="/popup-side1.jpg" alt="팝업 보조이미지 1" className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover rounded-lg shadow" />
        <img src="/popup-side2.jpg" alt="팝업 보조이미지 2" className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover rounded-lg shadow" />
        <img src="/popup-side3.jpg" alt="팝업 보조이미지 3" className="w-28 h-20 sm:w-40 sm:h-28 md:w-52 md:h-36 object-cover rounded-lg shadow" />
      </div>
    </div>
  </div>
</section>


      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">📍현장 스냅</h2>
          <p className="text-gray-600 mt-3">웨딩/기업/학교/교회/축제 등 다양한 현장 스토리.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-gray-100 aspect-[3/2]">
                <img
                  src={`/images${i + 1}.jpg`}       // ← 경로 수정 완료
                  alt={`현장사진 ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">📍패키지 & 가격</h2>
              <p className="text-gray-600 mt-3">행사 규모와 시간에 따라 맞춤 견적을 드립니다. (부가세 별도)</p>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold">
              가을 이벤트 ~ 11/31 · 35만원 특가(조건부)
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <PriceCard
              name="웨딩/기업 EVENT"
              price="₩350,000~"
              highlight
              bullets={["가을 이벤트", "1.5시간 진행", "현장 스태프 2명", "방명록&액자 제공", "맞춤 템플릿 1종"]}
              cta="상담 요청"
            />
            <PriceCard
              name="웨딩/기업 BASIC"
              price="₩500,000~"
              bullets={["1.5시간 진행", "현장 스태프 2명", "무제한 촬영·인화", "브랜딩 템플릿 2종", "SNS 공유 QR"]}
              cta="행사 문의"
            />
            <PriceCard
              name="웨딩/기업 PREMIUM"
              price="맞춤 견적"
              bullets={["브랜딩 풀커스텀", "대형 행사 동시 운영", "전용 배경 & 사인물", "V.I.P 톤 앤 매너 연출", "템플릿 원본 제공"]}
              cta="견적 받기"
            />
          </div>
          <p className="text-xs text-gray-500 mt-4">
            * 장소/시간/옵션(백월/커스텀시트지/추가필름)에 따라 변동될 수 있습니다.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">📍고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                q: [
                  "결혼식 날 디엠부스를 선택한 건 최고의 선택이었어요!",
                  "방명록을 볼 때마다 그날의 행복이 다시 떠오르고, 결혼식을 오래 기억에 남게 하는 최고의 아이템이라고 생각합니다.",
                  "꼭 친구들 결혼식에 하라고 추천할게요! 😊",
                ],
                a: "웨딩 포토부스",
              },
              { q: "브랜딩 템플릿 감각이 뛰어나 캠페인 효과가 컸어요", a: "기업 프로모션" },
              { q: "아이들이 너무 좋아해서 행사 만족도가 높았습니다", a: "여름 캠프" },
            ].map((r, i) => (
              <blockquote key={i} className="rounded-2xl border p-6 bg-white shadow-sm">
                <p className="font-semibold leading-relaxed">“{Array.isArray(r.q) ? r.q.join(" ") : r.q}”</p>
                <cite className="not-italic text-sm text-gray-500 inline-block mt-3">— {r.a}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">📍자주 묻는 질문</h2>
          <div className="mt-8 space-y-3">
            <Faq q="설치에 필요한 공간/전기는?" a="공간 2x2m 권장, 반경 10m 이내 220V 콘센트 1구면 충분합니다. 연장선은 저희가 준비합니다 :)" />
            <Faq q="현장 인원은 몇 명이 오나요?" a="행사 규모에 따라 1~2명이 상주하며 촬영 유도와 동선을 리드합니다." />
            <Faq q="기본 시간과 출력 수량은 어떻게 되나요?" a="기본 시간은 1시간 30분(1.5시간)이며, 이 경우 출력은 무제한으로 제공됩니다.<br />
행사를 3시간 이상으로 진행하실 경우에는 기본 800장을 기준으로 하며, 이후부터는 필름 추가 비용이 발생합니다.<br />
실제 운영 경험상 3시간 동안 꾸준히 사람이 몰려도 800장을 모두 사용하는 경우는 드뭅니다.<br />
그래서 대부분의 웨딩·기업 행사에서는 기본 제공량만으로 충분히 즐기실 수 있습니다." />
            <Faq q="예약은 얼마나 전에 해야 하나요?" a="한 달 전 권장. 급한 일정도 문의 주시면 가능 여부를 안내드립니다." />
            <Faq q="템플릿 디자인은 어떻게 진행되나요?" a="행사 컨셉/컬러/로고/문구를 받아 1:1 맞춤으로 제작, 사전 확정 후 진행합니다." />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">지금 바로 일정 확인해 드릴게요!</h2>
          <p className="text-gray-600 mt-3">카카오톡 채널이나 이메일로 편하게 문의 주세요.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://pf.kakao.com/_xahXAn/chat"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin-when-cross-origin"
              className="px-6 py-3 rounded-2xl bg-pink-500 text-white font-semibold hover:bg-pink-600 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> 카카오톡 상담
            </a>
            <a
              href="mailto:dmbooth@naver.com"
              className="px-6 py-3 rounded-2xl border font-semibold hover:bg-gray-50 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> dmbooth@naver.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} DM BOOTH. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/DM_BOOTH"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin-when-cross-origin"
              className="hover:opacity-70"
            >
              Instagram
            </a>
            <a href="mailto:dmbooth@naver.com" className="hover:opacity-70">
              Email
            </a>
            <a href="#" className="hover:opacity-70">
              개인정보처리방침
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ——————————————————————————————
// 재사용 컴포넌트
function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-gray-900 font-semibold">
        {icon} <span>{title}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

function PriceCard({
  name,
  price,
  bullets,
  cta,
  highlight,
}: {
  name: string;
  price: string;
  bullets: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-6 bg-white flex flex-col " +
        (highlight ? "ring-2 ring-pink-500 shadow-md" : "shadow-sm")
      }
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-extrabold tracking-tight">{name}</h3>
        <span className="text-sm px-2 py-1 rounded-full bg-gray-100">부가세 별도</span>
      </div>
      <p className="mt-2 text-3xl font-black">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-6 px-4 py-2 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 text-center"
      >
        {cta}
      </a>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border bg-white p-5 hover:bg-gray-50">
      <summary className="cursor-pointer list-none flex items-center justify-between font-semibold">
        <span>{q}</span>
        <span className="text-gray-400 group-open:rotate-180 transition">▾</span>
      </summary>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">{a}</p>
    </details>
  );
}
