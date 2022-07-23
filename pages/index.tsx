import type { NextPage } from "next";
import { Head } from "components";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Countdown = dynamic(() => import("../components/countdown/Countdown"), {
  ssr: false,
});

const HomePage: NextPage = () => {
  const [hasRsvpd, setHasRsvpd] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { rsvp } = router.query;
    setHasRsvpd(rsvp === "success");
    router.replace("/", undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const weddingDate = new Date(2022, 8, 9, 12, 0, 0);
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedWeddingDate = Intl.DateTimeFormat(
    "en-us",
    dateFormatOptions
  ).format(weddingDate);

  return (
    <>
      <Head></Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 pb-8 text-center sm:pb-16">
        <div className="relative banner w-screen h-[300px] sm:h-[700px] pb-4 sm:pb-8">
          <Image
            src="/images/home-banner.jpg"
            alt="Zach and MK on temple grounds"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h1 className="hidden sm:block z-10 mt-auto pb-0 text-6.5xl sm:pb-8 text-white sm:text-8xl font-great-vibes capitalize">
            {hasRsvpd ? "See you at the wedding!" : "We're getting married!"}
          </h1>
        </div>
        <h1 className="block sm:hidden mt-auto pb-6 text-6.5xl sm:pb-8 sm:text-8xl font-great-vibes capitalize">
          {hasRsvpd ? "See you at the wedding!" : "We're getting married!"}
        </h1>
        <div className="flex flex-col pb-8 text-center sm:pb-12 font-great-vibes">
          <span className="text-3xl sm:text-5xl">Mary Katherine Bryner</span>
          <span className="text-xl sm:text-2xl">&</span>
          <span className="text-3xl sm:text-5xl">Zachary Matthew Young</span>
        </div>
        <div className="pb-4 text-3xl sm:text-5xl font-great-vibes">
          {formattedWeddingDate}
        </div>
        <Countdown targetTime={weddingDate} className="pb-6 sm:pb-8" />
        <span>More details to come...</span>
      </main>
    </>
  );
};

export default HomePage;
