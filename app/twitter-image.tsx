import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Evryn - Find your people";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#6DBAC4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 300,
            color: "white",
            letterSpacing: "0.2em",
            marginBottom: 20,
          }}
        >
          Evryn
        </div>
        <div
          style={{
            fontSize: 48,
            color: "rgba(255, 255, 255, 0.9)",
            fontStyle: "italic",
          }}
        >
          Find your people.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
