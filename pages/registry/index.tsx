import type { NextPage } from "next";
import { Head, WeddingDate } from "components";
import dynamic from "next/dynamic";
import Image from "next/image";

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
        <div className="banner">
          <Image
            src="/images/home-banner.jpg"
            alt="Zach and MK sitting on a log in the forest"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h1 className="px-8 text-center hidden sm:block z-10 mt-auto pb-0 text-6.5xl sm:pb-8 text-white text-shadow sm:text-8xl font-great-vibes capitalize">
            Registry
          </h1>
        </div>

        <h1 className="px-8 text-center block sm:hidden mt-auto pb-6 text-6.5xl sm:pb-8 sm:text-8xl font-great-vibes capitalize">
          Registry
        </h1>

        <div className="flex flex-col px-8 pb-8 text-center sm:pb-12 font-great-vibes">
          <span className="text-3xl sm:text-5xl">Mary Katherine Bryner</span>
          <span className="text-xl sm:text-2xl">&amp;</span>
          <span className="text-3xl sm:text-5xl">Zachary Matthew Young</span>
        </div>

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
