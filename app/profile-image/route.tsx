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
          width="390"
          height="390"
          viewBox="30 30 140 140"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" filter="url(#glow)">
            {/* Center circle */}
            <circle cx="100" cy="100" r="33"/>
            {/* Six surrounding circles */}
            <circle cx="100" cy="67" r="33"/>
            <circle cx="128.6" cy="83.5" r="33"/>
            <circle cx="128.6" cy="116.5" r="33"/>
            <circle cx="100" cy="133" r="33"/>
            <circle cx="71.4" cy="116.5" r="33"/>
            <circle cx="71.4" cy="83.5" r="33"/>
          </g>
        </svg>
      </div>
    ),
    {
      width: 400,
      height: 400,
    }
  );
}
