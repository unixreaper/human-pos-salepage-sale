import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Sukreep POS — ครบ จบ ในระบบเดียว ทดลองใช้งานฟรี";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const [fontBold, logoBuf] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/mitr/Mitr-Bold.ttf")),
    readFile(join(process.cwd(), "public/images/bg/ตัวหนังสือ.png")),
  ]);

  const logo = `data:image/png;base64,${logoBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(165deg, #ff8a7a 0%, #e8120c 35%, #b50e08 65%, #6b0000 100%)",
          fontFamily: "Mitr",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: "rgba(255,255,255,0.94)",
            borderRadius: 32,
            boxShadow: "0 24px 80px rgba(139,0,0,0.28)",
            padding: "48px 56px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt=""
            width={480}
            height={100}
            style={{ objectFit: "contain", marginBottom: 28 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 56,
              fontWeight: 700,
              color: "#1a1a1a",
              textAlign: "center",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            <span>ครบ </span>
            <span style={{ color: "#e8120c" }}>จบ</span>
            <span> ในระบบเดียว</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              fontWeight: 700,
              color: "#e8120c",
            }}
          >
            ทดลองใช้งานฟรี
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 26,
              color: "#475569",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            ระบบ POS อัจฉริยะ · ตอบโจทย์ทุกฟังก์ชันการจัดการธุรกิจ
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg, #e8120c 0%, #8b0000 100%)",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
              padding: "18px 52px",
              borderRadius: 999,
              boxShadow: "0 8px 24px rgba(232,18,12,0.4)",
            }}
          >
            สมัครฟรี → sukreep.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Mitr",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
