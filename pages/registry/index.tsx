import type { NextPage } from "next";
import { Banner, BrideGroom, Head, WeddingDate } from "components";
import dynamic from "next/dynamic";

const Countdown = dynamic(
  () => import("../../components/countdown/Countdown"),
  {
    ssr: false,
  }
);

const RegistryPage: NextPage = () => {
  const weddingDate = new Date(2022, 8, 9, 12, 0, 0);

  return (
    <>
      <Head></Head>

      <main className="w-full pb-8 sm:pb-16">
        <Banner
          src="/images/home-banner.jpg"
          alt="Zach and MK sitting on a log in the forest"
          text="Registry"
        />

        <BrideGroom />

        <WeddingDate targetDate={weddingDate} />
        <Countdown
          targetTime={weddingDate}
          className="flex justify-center pb-6 text-center sm:pb-8"
        />

        <div className="pb-4 text-lg text-center sm:text-xl sm:pb-6">
          We are registered at
        </div>
        <div className="flex justify-center max-w-lg mx-auto">
          <div className="flex-grow text-center basis-0">
            <a
              href="https://www.crateandbarrel.com/gift-registry/mary-katherine-bryner-and-zachary-young/r6550371"
              target="_blank"
              rel="noreferrer"
            >
              Crate &amp; Barrel
            </a>
          </div>
          <span className="basis-1">and</span>
          <div className="flex-grow text-center basis-0">
            <a
              href="https://www.target.com/gift-registry/gift/bryner-young-wedding"
              target="_blank"
              rel="noreferrer"
            >
              Target
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistryPage;
