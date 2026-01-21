/**
 * Profile Image Generator (for X/Twitter, etc.)
 *
 * Generates a 400x400 square image with:
 * - Teal background (#6DBAC4)
 * - Seed of Life logo centered (white)
 *
 * Access locally at: http://localhost:3000/profile-image
 * Right-click to save as PNG.
 *
 * X/Twitter will crop square to circle automatically.
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
        }}
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 100 100"
        >
          {/* Center circle */}
          <circle cx="50" cy="50" r="16" fill="none" stroke="white" strokeWidth="1.2" />
          {/* Six surrounding circles */}
          <circle cx="50" cy="34" r="16" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="63.9" cy="42" r="16" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="63.9" cy="58" r="16" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="50" cy="66" r="16" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="36.1" cy="58" r="16" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="36.1" cy="42" r="16" fill="none" stroke="white" strokeWidth="1.2" />
        </svg>
      </div>
    ),
    {
      width: 400,
      height: 400,
    }
  );
}
