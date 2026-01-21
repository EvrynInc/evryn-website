/**
 * LinkedIn Banner Generator
 *
 * Generates a 1584x396 banner image with:
 * - Teal background (#6DBAC4)
 * - Seed of Life logo (30% opacity)
 * - "Evryn" wordmark centered on the logo
 *
 * Access locally at: http://localhost:3000/banner
 * Right-click to save as PNG, then upload to LinkedIn.
 *
 * If branding changes, update colors/fonts here.
 * Adjust marginTop/marginLeft to re-center if needed.
 */

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
        {/* Seed of Life - sized to match wordmark width */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="480"
            height="480"
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

        {/* Wordmark with subtle shadow for pop - manually centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 140,
            fontWeight: 300,
            color: "white",
            letterSpacing: "0.2em",
            marginTop: -20,
            marginLeft: 17,
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.15)",
            zIndex: 1,
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
