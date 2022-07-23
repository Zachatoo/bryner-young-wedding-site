import type { NextPage } from "next";
import { Head } from "components";
import dynamic from "next/dynamic";
import { useIntersectionObserver } from "hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Countdown = dynamic(() => import("../components/countdown/Countdown"), {
  ssr: false,
});

const HomePage: NextPage = () => {
  const [hasRsvpd, setHasRsvpd] = useState(false);
  const [proposalRef, proposalIsVisible] = useIntersectionObserver({
    threshold: 0.25,
  });
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
  const bannerText = hasRsvpd
    ? "See you at the wedding!"
    : "We're getting married!";

  return (
    <>
      <Head></Head>

      <main className="w-full pb-8 sm:pb-16">
        <div className="banner">
          <Image
            src="/images/home-banner.jpg"
            alt="Zach and MK on temple grounds"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h1 className="px-8 text-center hidden sm:block z-10 mt-auto pb-0 text-6.5xl sm:pb-8 text-white text-shadow sm:text-8xl font-great-vibes capitalize">
            {bannerText}
          </h1>
        </div>

        <h1 className="px-8 text-center block sm:hidden mt-auto pb-6 text-6.5xl sm:pb-8 sm:text-8xl font-great-vibes capitalize">
          {bannerText}
        </h1>

        <div className="flex flex-col px-8 pb-8 text-center sm:pb-12 font-great-vibes">
          <span className="text-3xl sm:text-5xl">Mary Katherine Bryner</span>
          <span className="text-xl sm:text-2xl">&amp;</span>
          <span className="text-3xl sm:text-5xl">Zachary Matthew Young</span>
        </div>

        <div className="px-8 pb-4 text-3xl text-center sm:text-5xl font-great-vibes">
          {formattedWeddingDate}
        </div>
        <Countdown
          targetTime={weddingDate}
          className="flex justify-center pb-6 text-center sm:pb-8"
        />

        <div
          ref={proposalRef}
          className={`story ${proposalIsVisible ? "" : "opacity-0"}`}
        >
          <div
            className={`${
              proposalIsVisible ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <h2>The proposal</h2>
              <span>- Zach</span>
            </div>
            <p>
              We had planned to go to Bear Lake to be with my extended family
              for a family reunion that morning. When I went to pick up Mary
              Katherine I had the chance to show her mom the engagement ring and
              tell her of my plans to propose today. It was a fun and special
              moment.
            </p>
            <p>
              I had put the ring in my right pocket to keep it hidden.
              Unfortunately (or fortunately?) for me, Mary Katherine had her
              hand on my right leg most of the ride up. I was very stressed
              about her accidently feeling the ring in my pocket.
            </p>
            <p>
              We went to the beach and walked along the shore picking up
              seashells. At one point while we were standing in the water, she
              said something along the lines of &quot;you should just propose
              right now.&quot; Unfortunately I had left the ring in my jeans and
              we had both switched into swimsuits so I didn&apos;t have the ring
              on me anymore, so I didn&apos;t.
            </p>
            <p>
              Later in the day we took an ATV to use to go up to Sadducee
              Spring. It&apos;s a cute little beginning of the stream that
              eventually flows down by{" "}
              <a href="https://www.bearlakelodge.com/fish-haven-creek-lodge">
                Fish Haven Lodge
              </a>{" "}
              . My Uncle Dan and Aunt Patty and their daughter Mary showed up
              shortly after us. Dan said &quot;I hear you two are on the verge
              of being engaged,&quot; to which I responded &quot;very on the
              verge!&quot; I was thinking of proposing here, but some other
              people we didn&apos;t know also came to the spring and there
              wasn&apos;t really a great place to kneel down.
            </p>
            <p>
              The day was coming to a close, and I still hadn&apos;t proposed!
              We were back at Fish Haven Lodge and I said to Mary Katherine
              &quot;We should go stand on the bridge for a minute. I like
              bridges. And water.&quot; Mary Katherine talked about how we
              should have a stream going through our yard one day, and I
              responded with &quot;You know what else we should do?&quot;
              &quot;What?&quot; &quot;We should get married.&quot; &quot;Yeah we
              should!&quot; As I went to kneel on one knee she realized what was
              happening and she said &quot;Is this really happening?&quot; I
              pulled out the ring and I asked if she would marry me, and she
              said yes!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
