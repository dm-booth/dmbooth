// app/rss.xml/route.ts
export async function GET() {
  const base = "https://dmbooth.kr";

  // 지금은 랜딩만 있으니 홈 1개만 아이템으로 넣어둠.
  // 나중에 소식/후기 글이 생기면 여기에 항목을 추가하면 됨.
  const items = [
    {
      title: "DM BOOTH — 디엠부스",
      link: `${base}/`,
      description: "모든 이벤트에 최적화된 프리미엄 포토부스",
      pubDate: new Date().toUTCString(),
      guid: `${base}/`,
    },
  ];

  const xmlItems = items
    .map(
      (i) => `
      <item>
        <title><![CDATA[${i.title}]]></title>
        <link>${i.link}</link>
        <description><![CDATA[${i.description}]]></description>
        <pubDate>${i.pubDate}</pubDate>
        <guid isPermaLink="true">${i.guid}</guid>
      </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>DM BOOTH RSS</title>
      <link>${base}</link>
      <description>디엠부스 소식 피드</description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${xmlItems}
    </channel>
  </rss>`.trim();

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
}
