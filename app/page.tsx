import Image from "next/image";
import {
  BarChart3,
  Building2,
  Package,
  ScanBarcode,
  UserPlus,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { LINE_ADD_FRIEND_URL, REGISTER_URL } from "@/lib/site";
import { Reveal } from "./components/Reveal";
import styles from "./page.module.css";

const externalLink = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

type FeatureTone = "orange" | "cyan" | "purple" | "green" | "pink" | "blue";

type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon;
  tone: FeatureTone;
};

const featureToneClasses: Record<FeatureTone, string> = {
  orange: styles.featureIconOrange,
  cyan: styles.featureIconCyan,
  purple: styles.featureIconPurple,
  green: styles.featureIconGreen,
  pink: styles.featureIconPink,
  blue: styles.featureIconBlue,
};

/* ------------------------------------------------------------------ */
/*  Feature data                                                        */
/* ------------------------------------------------------------------ */
const features: Feature[] = [
  {
    icon: ScanBarcode,
    tone: "orange",
    title: "สแกน บาร์โค้ด/คิวอาร์โค้ด",
    desc: "ขายไว",
  },
  {
    icon: Building2,
    tone: "cyan",
    title: "บริหารหลายสาขา",
    desc: "ดูได้ทุกที่",
  },
  {
    icon: Package,
    tone: "purple",
    title: "จัดการสินค้าและคลัง",
    desc: "สต็อกแน่น",
  },
  {
    icon: BarChart3,
    tone: "green",
    title: "ดูยอดขายเรียลไทม์",
    desc: "รู้กำไรทันที",
  },
  {
    icon: UserPlus,
    tone: "pink",
    title: "จัดการลูกค้า",
    desc: "รู้ใจลูกค้า",
  },
  {
    icon: Zap,
    tone: "blue",
    title: "จัดการบริหาร",
    desc: "ร้านสปาก็ใช้ได้",
  },
];

const benefits = [
  "ปิดการขายได้รวดเร็ว ลดเวลารอคิว มอบประสบการณ์ที่ดีให้ลูกค้า",
  "วิเคราะห์รายงานการขายแม่นยำ ทราบสินค้าขายดีและผลกำไรได้ทันที",
  "ป้องกันการทุจริต ตรวจสอบกระแสเงินสดได้อย่างโปร่งใส",
  "สร้างร้านค้าเป็นของตัวเองได้ง่ายๆ ด้วยระบบ Sukreep POS",
  "เปลี่ยนเป็น สามารถสั่งซื้อผ่าน QR Code สะดวก รวดเร็ว ทันใจ",
  "สร้าง QR Code สั่งอาหารในร้านได้อย่างมีประสิทธิภาพ",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className={styles.page}>

      {/* ============================================================
          SECTION 1 — HERO
          BG: BG.png (store interior, dark red tint)
          Layout: text left-centre, person centre-right, devices floating
      ============================================================ */}
      <section className={styles.hero}>
        {/* full-bleed background */}
        <div className={styles.heroBg}>
          <Image
            src="/images/bg/BG.png"
            alt=""
            fill
            priority
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* dark gradient overlay so text is readable */}
          <div className={styles.heroBgOverlay} />
        </div>

        {/* content wrapper */}
        <div className={styles.heroInner}>
          {/* ---- headline block ---- */}
          <div className={styles.heroText}>
            <Reveal immediate variant="fade" delay={0}>
              <p className={styles.heroTag}>
                ยกระดับการบริหารร้านค้าอย่าง{" "}
                <span className={styles.tagHighlight}>มืออาชีพ</span>
              </p>
            </Reveal>

            <Reveal immediate variant="pop" delay={120}>
              <h1 className={styles.heroH1}>
                <span className={styles.heroH1Lead}>ครบ </span>
                <span className={styles.heroH1Accent}>จบ</span>
                <span className={styles.heroH1Tail}> ในระบบเดียว</span>
              </h1>
            </Reveal>

            <Reveal immediate variant="rise" delay={240}>
              <p className={styles.heroDesc}>
                <span className={styles.heroDescLine}>
                  โซลูชัน <span className={styles.heroDescKeep}>POS</span> อัจฉริยะ ตอบโจทย์{" "}
                  <span className={styles.heroDescKeep}>ทุกฟังก์ชัน</span>{" "}
                  <span className={styles.heroDescKeep}>การจัดการธุรกิจ</span>
                </span>
                <span className={styles.heroDescLine}>
                  เพิ่มประสิทธิภาพการจัดการ
                  <span className={styles.heroDescKeep}>หน้าร้าน</span>
                </span>
                <span className={styles.heroDescLine}>
                  ด้วยระบบครบถ้วน <span className={styles.heroDescKeep}>และตอบโจทย์</span>
                </span>
              </p>
            </Reveal>

            <Reveal immediate variant="rise" delay={360}>
              <div className={styles.btnRow}>
                <a href={REGISTER_URL} {...externalLink} className={styles.btnRed}>
                  ทดลองใช้งานฟรี!
                </a>
                <a href={LINE_ADD_FRIEND_URL} {...externalLink} className={styles.btnRedOutline}>
                  ติดต่อสอบถาม
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---- device + person visuals ---- */}
          <div className={styles.heroVisuals}>
            {/* red glow ring behind person */}
            <div className={styles.glowRing} />

            <div className={styles.laptop}>
              <div className={styles.heroDeviceEnter}>
                <Image
                  src="/images/bg/โน็ตบุ๊ค.png"
                  alt="Laptop"
                  width={520}
                  height={340}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className={styles.phone}>
              <div className={styles.heroDeviceEnter}>
                <Image
                  src="/images/bg/โทรศัพท์หน้าสินค้า.png"
                  alt="Phone"
                  width={160}
                  height={320}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className={styles.person}>
              <div className={styles.heroPersonEnter}>
                <Image
                  src="/images/bg/คน.png"
                  alt="Person"
                  width={1200}
                  height={1600}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className={`${styles.floatIcon} ${styles.fiBottomLeft} ${styles.heroFloatEnter1}`}>
              <div className={styles.heroFloatShell}>
                <Image src="/images/bg/วงกลมรถเข็น.png" alt="" width={84} height={84} />
              </div>
            </div>
            <div className={`${styles.floatIcon} ${styles.fiBag} ${styles.heroFloatEnter2}`}>
              <div className={styles.heroFloatShell}>
                <Image src="/images/bg/วงกลมกระเป๋าสินค้า.png" alt="" width={84} height={84} />
              </div>
            </div>
            <div className={`${styles.floatIcon} ${styles.fiTopRight} ${styles.heroFloatEnter3}`}>
              <div className={styles.heroFloatShell}>
                <Image src="/images/bg/วงกลมคิวอาร์.png" alt="" width={84} height={84} />
              </div>
            </div>
            <div className={`${styles.floatIcon} ${styles.fiCoin} ${styles.heroFloatEnter4}`}>
              <div className={styles.heroFloatShell}>
                <Image src="/images/bg/วงกลมเหรียญ.png" alt="" width={84} height={84} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — FEATURES (6 cards)
          BG: BG3.png (glowing red)
      ============================================================ */}
      <section className={styles.features}>
        <div className={styles.featuresBg}>
          <Image
            src="/images/bg/BG3.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center bottom" }}
          />
          <div className={styles.featuresBgOverlay} />
        </div>

        <div className={styles.sectionInner}>
          <Reveal variant="pop">
            <h2 className={`${styles.secTitle} ${styles.featuresTitle}`}>
              <span className={styles.featuresTitleLead}>โปรแกรมขายหน้าร้าน </span>
              <span className={styles.featuresTitleAccent}>ครบ จบ </span>
              <span className={styles.featuresTitleAccent}>พร้อมใช้งาน</span>
            </h2>
          </Reveal>

          <div className={styles.featureGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Reveal
                  key={feature.title}
                  className={styles.featureCard}
                  variant="rise"
                  delay={index * 90}
                >
                  <div
                    className={`${styles.featureIcon} ${featureToneClasses[feature.tone]}`}
                  >
                    <Icon aria-hidden size={26} strokeWidth={2.4} />
                  </div>
                  <div className={styles.featureCopy}>
                    <p className={styles.featureTitle}>{feature.title}</p>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — MOBILE CASHIER
          BG: BG 2.png (store floor, dark red tint)
      ============================================================ */}
      <section className={styles.mobileSec}>
        <div className={styles.mobileBg}>
          <Image
            src="/images/bg/BG 2.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className={styles.mobileBgOverlay} />
        </div>

        <div className={styles.mobileInner}>
          <Reveal variant="pop">
            <div className={styles.mobileCopy}>
              <h2 className={styles.mobileTitle}>
                <span className={styles.mobileTitleLead}>เปลี่ยนมือถือของคุณให้เป็น</span>
                <span className={styles.mobileTitleAccent}>เครื่องคิดเลข</span>
              </h2>
              <p className={styles.mobileSubtitle}>
                <span className={styles.mobileSubtitleLead}>ไม่ต้องลงทุนในอุปกรณ์</span>
                <span className={styles.mobileSubtitleTail}>แพงๆ</span>
              </p>
            </div>
          </Reveal>

          <Reveal variant="rise" delay={120}>
            <div className={styles.mobileDevices}>
              <Image
                src="/images/bg/แท็ป+มือถือ.png"
                alt="แท็บเล็ตและมือถือแสดงหน้าจอ Sukreep POS"
                width={793}
                height={563}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </Reveal>

          <Reveal variant="rise" delay={220}>
            <div className={styles.mobileBtnRow}>
              <a href={REGISTER_URL} {...externalLink} className={styles.btnRed}>
                ทดลองใช้งานฟรี!
              </a>
              <a href={LINE_ADD_FRIEND_URL} {...externalLink} className={styles.btnRedOutline}>
                ติดต่อสอบถาม
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — WHY POS
          BG: BG4.png (dark red with QR codes)
      ============================================================ */}
      <section className={styles.whySec}>
        <div className={styles.whyBg}>
          <Image
            src="/images/bg/BG4.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.whyBgOverlay} />
        </div>

        <div className={styles.sectionInner}>
          <Reveal variant="pop">
            <h2 className={styles.secTitle}>
              ทำไมร้านค้าต้องใช้ <span className={styles.secTitleRed}>POS</span>
            </h2>
          </Reveal>

          <ul className={styles.benefitList}>
            {benefits.map((benefit, index) => (
              <li key={benefit} className={styles.benefitItem}>
                <Reveal className={styles.benefitReveal} variant="left" delay={index * 70}>
                  <span className={styles.benefitStar}>★</span>
                  {benefit}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 — SHOWCASE (3 store photos carousel placeholder)
          BG: BG6.png (dark red hexagon pattern)
      ============================================================ */}
      <section className={styles.showcaseSec}>
        <div className={styles.showcaseBg}>
          <Image
            src="/images/bg/BG6.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.showcaseBgOverlay} />
        </div>

        <div className={styles.sectionInner}>
          <Reveal variant="pop">
            <h2 className={styles.secTitle}>
              โปรแกรมขายหน้าร้าน{" "}
              <span className={styles.secTitleRed}>ที่รองรับการขายทุกรูปแบบ</span>
            </h2>
          </Reveal>

          <div className={styles.showcaseGrid}>
            {[
              { src: "/images/bg/BG.png", alt: "ร้านค้า 1" },
              { src: "/images/bg/BG 2.png", alt: "ร้านค้า 2" },
              { src: "/images/bg/BG3.png", alt: "ร้านค้า 3" },
            ].map((item, index) => (
              <Reveal
                key={item.alt}
                className={styles.showcaseCard}
                variant="rise"
                delay={index * 110}
              >
                <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover", borderRadius: 16 }} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={120}>
            <p className={styles.showcaseCaption}>● ● ● ● ( เป็นภาพตัวอย่างร้านค้าเลื่อนได้ )</p>
          </Reveal>

          <Reveal variant="rise" delay={180}>
            <div className={styles.btnRow} style={{ justifyContent: "center", marginTop: 48 }}>
              <a href={REGISTER_URL} {...externalLink} className={styles.btnRed}>
                ทดลองใช้งานฟรี!
              </a>
              <a href={LINE_ADD_FRIEND_URL} {...externalLink} className={styles.btnRedOutline}>
                ติดต่อสอบถาม
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 6 — 3-STEP ONBOARDING
          Used inside showcase section in the original, keeping separate here
      ============================================================ */}

      {/* ============================================================
          SECTION 7 — FINAL CTA
          BG: BG5.png (diagonal lines)
      ============================================================ */}
      <section className={styles.ctaSec}>
        <div className={styles.ctaBg}>
          <Image
            src="/images/bg/BG5.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.ctaBgOverlay} />
        </div>

        <div className={styles.ctaInner}>
          <Reveal variant="pop">
            <h2 className={styles.ctaH2}>
              พร้อมยกระดับธุรกิจของคุณหรือยัง?
            </h2>
          </Reveal>

          <Reveal variant="rise" delay={100}>
            <p className={styles.ctaDesc}>
              ใช้งานฟรี! สมัครง่ายเพียงแค่เบอร์โทรศัพท์
              <br />
              ใช้เวลาไม่เกิน 5 นาทีเพียง 3 ขั้นตอนเท่านั้น!!
            </p>
          </Reveal>

          <div className={styles.stepRow}>
            {[
              { src: "/images/bg/สมัครใช้งาน.png", alt: "สมัครใช้งาน" },
              { src: "/images/bg/โหลดแอป.png", alt: "โหลดแอป" },
              { src: "/images/bg/ขายได้เลย.png", alt: "ขายได้เลย" },
            ].map((step, index) => (
              <Reveal key={step.alt} variant="pop" delay={index * 120}>
                <Image src={step.src} alt={step.alt} width={200} height={230} style={{ objectFit: "contain" }} />
              </Reveal>
            ))}
          </div>

          <Reveal variant="rise" delay={260}>
            <a href={REGISTER_URL} {...externalLink} className={styles.btnRedLg}>
              ทดลองใช้งานฟรี!
            </a>
          </Reveal>

          <div className={styles.ctaLineRow}>
            <a href={LINE_ADD_FRIEND_URL} {...externalLink} className={styles.btnLine}>
              เพิ่มเพื่อน LINE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
