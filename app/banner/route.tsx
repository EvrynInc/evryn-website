import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#6DBAC4",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Seed of Life - simplified version using circles */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="320"
            height="320"
            viewBox="0 0 100 100"
            style={{ opacity: 0.3 }}
          >
            {/* Center circle */}
            <circle cx="50" cy="50" r="16" fill="none" stroke="white" strokeWidth="0.8" />
            {/* Six surrounding circles */}
            <circle cx="50" cy="34" r="16" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="63.9" cy="42" r="16" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="63.9" cy="58" r="16" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="50" cy="66" r="16" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="36.1" cy="58" r="16" fill="none" stroke="white" strokeWidth="0.8" />
            <circle cx="36.1" cy="42" r="16" fill="none" stroke="white" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Wordmark with subtle shadow for pop */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 300,
            color: "white",
            letterSpacing: "0.2em",
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
            marginLeft: 80, // Offset right to account for profile pic
          }}
        >
          Evryn
        </div>
      </div>
    ),
    {
      width: 1584,
      height: 396,
    }
  );
}
