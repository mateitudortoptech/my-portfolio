import { ImageResponse } from "next/og";
import { site } from "@/data/profile";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070b",
          padding: "72px",
          color: "#e8eef8",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8fb0ff",
          }}
        >
          {site.location.display}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 36, color: "#8b98ad" }}>{site.name}</div>
          <div style={{ fontSize: 64, marginTop: 12, lineHeight: 1.1 }}>
            {site.title}
          </div>
          <div style={{ marginTop: 24, fontSize: 24, color: "#8b98ad" }}>
            12+ years · AI/ML · Full-stack · Cloud · LLMs · RAG
          </div>
        </div>
      </div>
    ),
    size,
  );
}
