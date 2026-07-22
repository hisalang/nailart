import Link from "next/link";

export default function AuthCodeErrorPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[#0a0a0f] px-6 text-center text-white">
      <div>
        <h1
          className="text-2xl font-bold tracking-tight"
          style={{
            fontFamily:
              "var(--font-space-grotesk), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          로그인에 실패했어요
        </h1>
        <p className="mt-2 text-sm text-white/60">
          인증 절차가 완료되지 않았습니다. 다시 시도해 주세요.
        </p>
      </div>

      <Link
        href="/auth"
        className="rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.28)] backdrop-blur-md transition-colors hover:bg-white/20"
      >
        다시 로그인하기
      </Link>
    </main>
  );
}
