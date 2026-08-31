import { ImageResponse } from "next/og";

export const alt = "Faran Khan | AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#111111",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#999999",
            letterSpacing: "4px",
            marginBottom: 24,
          }}
        >
          FARAN KHAN
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          AI Engineer
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#aaaaaa",
            lineHeight: 1.4,
          }}
        >
          Machine Learning • Python • Artificial Intelligence
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 50,
            fontSize: 24,
            color: "#777777",
          }}
        >
          faran-khan-portfolio.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}