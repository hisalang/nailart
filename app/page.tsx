import Navbar from "@/components/main/navbar";
import AetherHero from "@/components/main/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <AetherHero
        eyebrow="AI 유튜브 썸네일 생성기"
        title="클릭을 부르는 썸네일, AI가 1분 만에."
        subtitle="영상 제목만 넣으면 NailArt AI가 조회수를 높이는 유튜브 썸네일을 자동으로 만들어 드립니다. 디자인 지식 없이, 지금 바로."
        ctaLabel="무료로 썸네일 만들기"
        ctaHref="#get-started"
        secondaryCtaLabel="예시 보기"
        secondaryCtaHref="#gallery"
      />
    </>
  );
}
