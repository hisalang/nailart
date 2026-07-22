import Link from "next/link";
import GoogleSignInButton from "@/components/auth/google-sign-in-button";

// TODO: replace with the actual NailArt AI demo video.
const YOUTUBE_VIDEO_ID = "ScMzIvxBSi4";

const DISPLAY_FONT =
  "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif";

export default function AuthPage() {
  return (
    <main className="grid min-h-dvh grid-cols-1 bg-[#0a0a0f] text-white lg:grid-cols-5">
      {/* ---------- Left panel (3/5) ---------- */}
      <section className="relative hidden flex-col justify-between overflow-hidden p-10 lg:col-span-3 lg:flex xl:p-14">
        {/* Background: brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #ff5f6d, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-32 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #ffc371, transparent 70%)",
          }}
        />

        {/* Semi-transparent black scrim over the background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/60"
        />

        {/* Top: YouTube video */}
        <div className="relative z-10 w-full">
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,.6)] ring-1 ring-white/15">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`}
              title="NailArt AI 소개 영상"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom: oversized display wordmark */}
        <div className="relative z-10 text-center">
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: DISPLAY_FONT,
              fontSize: "clamp(3.5rem, 9vw, 9rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.045em",
            }}
          >
            NAILART
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/60">
            클릭을 부르는 유튜브 썸네일을 AI가 1분 만에 만들어 드립니다.
          </p>
        </div>
      </section>

      {/* ---------- Right panel (2/5): login card ---------- */}
      <section className="relative flex items-center justify-center px-6 py-12 lg:col-span-2">
        {/* Back to home */}
        <Link
          href="/"
          aria-label="뒤로가기"
          className="absolute top-6 left-6 flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="block"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          뒤로가기
        </Link>

        <div className="w-full max-w-sm">
          {/* Logo + wordmark */}
          <Link href="/" className="mb-8 flex items-center justify-center gap-2">
            <svg
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="block"
              style={{ filter: "drop-shadow(0 0 12px rgba(255,120,120,.6))" }}
            >
              <defs>
                <linearGradient id="nailart-auth-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff5f6d" />
                  <stop offset="1" stopColor="#ffc371" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l2.4 6.1L21 10l-6 3.4L12 22l-3-8.6L3 10l6.6-1.9L12 2z"
                fill="url(#nailart-auth-grad)"
              />
            </svg>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              NailArt AI
            </span>
          </Link>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              시작하기
            </h1>
            <p className="mt-2 text-sm text-white/60">
              구글 계정으로 로그인하고 썸네일을 만들어 보세요.
            </p>
          </div>

          {/* Google button */}
          <GoogleSignInButton next="/" />

          {/* Fine print */}
          <p className="mt-6 text-center text-xs leading-relaxed text-white/40">
            계속 진행하면 NailArt AI의{" "}
            <Link
              href="#terms"
              className="underline underline-offset-2 hover:text-white/60"
            >
              이용약관
            </Link>{" "}
            및{" "}
            <Link
              href="#privacy"
              className="underline underline-offset-2 hover:text-white/60"
            >
              개인정보처리방침
            </Link>
            에 동의하게 됩니다.
          </p>
        </div>
      </section>
    </main>
  );
}
