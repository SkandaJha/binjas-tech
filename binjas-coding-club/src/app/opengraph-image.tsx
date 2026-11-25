import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { club, hero } from "@/content/site";

export const alt = club.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share image: the club logo, name and sub-headline. Built from public/logo.png at build time. */
export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: 72,
          background: "#0c1424",
          color: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={340} height={246} style={{ background: "#fff", borderRadius: 28, padding: 16 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{club.name}</div>
          <div style={{ fontSize: 30, color: "#94a3b8", lineHeight: 1.35 }}>{hero.subheading}</div>
          <div style={{ fontSize: 26, color: "#60a5fa" }}>{club.institution}</div>
        </div>
      </div>
    ),
    size,
  );
}
