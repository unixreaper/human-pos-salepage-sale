/** Production URL ของเซลล์เพจ */
export const SALE_PAGE_URL = "https://sale.sukreep.com";

export const REGISTER_URL = "https://sukreep.com/register?invite=sale";
export const LINE_ADD_FRIEND_URL = "https://lin.ee/sidmOgq";

/** Canonical site URL for OG/Twitter absolute image links */
export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return SALE_PAGE_URL;
}

export const SITE_NAME = "Sukreep POS";
export const SHARE_TITLE = "Sukreep POS — ครบ จบ ในระบบเดียว";
export const SHARE_DESCRIPTION =
  "ระบบ POS อัจฉริยะ · ทดลองใช้งานฟรี · สมัครง่าย";
