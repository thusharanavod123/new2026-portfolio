import { ImageResponse } from "next/og";

export const alt = "Thushara Navod — Cloud, AI and Brand Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f0442f", color: "#11120f", padding: "64px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontWeight: 700, textTransform: "uppercase" }}>
        <span>Thushara Navod.</span><span>Based in Sri Lanka</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 800, lineHeight: .9, letterSpacing: "-5px", textTransform: "uppercase" }}>
        <span>Cloud systems.</span><span>Intelligent products.</span><span style={{ color: "#ffe9dc" }}>Brands with gravity.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}><span>Cloud Engineer · AI Engineer · Brand Builder</span><span>TN / 2026</span></div>
    </div>,
    size
  );
}
