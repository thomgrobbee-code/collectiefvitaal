import { ImageResponse } from "next/og";

export const alt = "Collectief Vitaal. 10% beter. Samen maken we Nederland vitaler.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#FFF8EE", color: "#0F4C5C" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#1E7A4C" }}>Collectief Vitaal</div>
        <div style={{ display: "flex", fontSize: 110, fontWeight: 900, marginTop: 20 }}>10% beter.</div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800, marginTop: 8, maxWidth: 900 }}>Samen maken we Nederland vitaler.</div>
        <div style={{ display: "flex", position: "absolute", right: -120, bottom: -160, width: 560, height: 560, borderRadius: 999, background: "#A8E6C2" }} />
        <div style={{ display: "flex", position: "absolute", right: 60, bottom: 60, width: 200, height: 200, borderRadius: 999, background: "#34C37B" }} />
      </div>
    ),
    size,
  );
}
