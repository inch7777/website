import { ImageResponse } from "next/og";
import { site } from "../lib/site";

export const alt = site.socialImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f4ed",
          color: "#282724",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            fontSize: 25,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
          }}
        >
          Personal website
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1 }}>
            Yanqi Wang
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 32,
              color: "#64615a",
            }}
          >
            Student and writer · Philosophy · Politics · Mathematics
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 8,
            background: "#a24936",
          }}
        />
      </div>
    ),
    size,
  );
}
