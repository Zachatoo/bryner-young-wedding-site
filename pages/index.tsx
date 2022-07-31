import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import {
  Banner,
  BrideGroomText,
  Carousel,
  Head,
  RegistryLinksText,
  WeddingDateText,
} from "components";
import dynamic from "next/dynamic";
import { promises as fs } from "fs";
import path from "path";
import { useIntersectionObserver } from "hooks";

const Countdown = dynamic(() => import("../components/countdown/Countdown"), {
  ssr: false,
});

export const getStaticProps: GetStaticProps = async () => {
  const imagesDirectory = path.join(process.cwd(), "public/images/engagements");
  const filenames = await fs.readdir(imagesDirectory);

  const imagePaths = filenames.map((filename) =>
    path.join("/images/engagements", filename)
  );

  return {
    props: {
      imagePaths,
    },
  };
};

const HomePage: NextPage = ({
  imagePaths,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [proposalRef, proposalIsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const weddingDate = new Date(process.env.NEXT_PUBLIC_WEDDING_DATE || "");
  const bannerText = "We're getting married!";

  return (
    <>
      <Head></Head>

      <main className="w-full pb-8 sm:pb-16">
        <Banner
          src="/images/home-banner.jpg"
          alt="Zach and MK walking through a meadow"
          text={bannerText}
        />

        <BrideGroomText />

        <WeddingDateText targetDate={weddingDate} />
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

        <div className="max-w-3xl px-4 py-6 mx-auto sm:py-8">
          <h2>Photos</h2>
          <Carousel imagePaths={imagePaths} />
        </div>

        {/* <div id="registry" className="max-w-3xl mx-auto">
          <h2 className="py-4 text-center sm:py-6">Registry</h2>

          <RegistryLinksText />
        </div> */}
      </main>
    </>
  );
};

export default HomePage;
