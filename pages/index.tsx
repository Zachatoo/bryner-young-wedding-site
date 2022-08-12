import type { NextPage } from "next";
import {
  Banner,
  BrideGroomText,
  Carousel,
  Head,
  HeaderNavigation,
  Heading,
  RegistryLinksText,
  Section,
  WeddingDateText,
} from "components";
import dynamic from "next/dynamic";
import { engagementImagePaths } from "utils";
import bannerImg from "public/images/home-banner.jpg";

const Countdown = dynamic(() => import("../components/countdown/Countdown"), {
  ssr: false,
});

const HomePage: NextPage = () => {
  const weddingDate = new Date(process.env.NEXT_PUBLIC_WEDDING_DATE || "");

  return (
    <>
      <Head></Head>

      <HeaderNavigation />

      <main className="w-full pt-6 pb-8 sm:pb-16">
        <h1 className="pb-4 text-center sm:pb-8 text-green-dark">
          We&apos;re getting married!
        </h1>

        <WeddingDateText className="text-green-dark" />
        <Countdown
          targetTime={weddingDate}
          className="flex justify-center pb-6 text-center sm:pb-8 text-green-dark"
        />
        <Banner src={bannerImg} alt="Zach and MK walking through a meadow">
          <BrideGroomText />
        </Banner>

        <Section paddingClasses="pt-10 sm:pt-12">
          <Heading id="story">
            <h2>Our Story</h2>
          </Heading>
        </Section>

        <Section paddingClasses="pt-8 sm:pt-10">
          <Heading id="about-us">
            <h3>About Us</h3>
          </Heading>
          <p></p>
        </Section>

        <Section paddingClasses="pt-8 sm:pt-10">
          <Heading id="proposal">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <h3>The Proposal</h3>
              <span>- Zach</span>
            </div>
          </Heading>
          <p>
            We had planned to go to Bear Lake to be with my extended family for
            a family reunion that morning. When I went to pick up Mary Katherine
            I had the chance to show her mom the engagement ring and tell her of
            my plans to propose today. It was a fun and special moment.
          </p>
          <p>
            I had put the ring in my right pocket to keep it hidden.
            Unfortunately (or fortunately?) for me, Mary Katherine had her hand
            on my right leg most of the ride up. I was very stressed about her
            accidently feeling the ring in my pocket.
          </p>
          <p>
            We went to the beach and walked along the shore picking up
            seashells. At one point while we were standing in the water, she
            made a comment about how this would be the perfect place to propose.
            Unfortunately I had left the ring in my jeans and we had both
            switched into swimsuits so I didn&apos;t have the ring on me
            anymore, so I didn&apos;t.
          </p>
          <p>
            Later in the day we took an ATV to use to go up to Sadducee Spring.
            It&apos;s a cute little beginning of the stream that eventually
            flows down by{" "}
            <a href="https://www.bearlakelodge.com/fish-haven-creek-lodge">
              Fish Haven Lodge
            </a>{" "}
            . My Uncle Dan and Aunt Patty and their daughter Mary showed up
            shortly after us. Dan said &quot;I hear you two are on the verge of
            being engaged,&quot; to which I responded &quot;very on the
            verge!&quot; I was thinking of proposing here, but some other people
            we didn&apos;t know also came to the spring and there wasn&apos;t
            really a great place to kneel down.
          </p>
          <p>
            The day was coming to a close, and I still hadn&apos;t proposed! We
            were back at Fish Haven Lodge and I said to Mary Katherine &quot;We
            should go stand on the bridge for a minute. I like bridges. And
            water.&quot; Mary Katherine, completely oblivious to what was about
            to happen, talked about how we should have a stream going through
            our yard one day, and I responded with &quot;You know what else we
            should do?&quot; &quot;What?&quot; &quot;We should get
            married.&quot; &quot;Yeah we should!&quot; As I went to kneel on one
            knee she realized what was happening and she said &quot;Wait,
            really?&quot; I pulled out the ring and I asked if she would marry
            me, and she said yes!
          </p>
        </Section>

        <Section>
          <Heading id="photos">
            <h2>Photos</h2>
          </Heading>
          <Carousel
            imagePaths={engagementImagePaths}
            alt="Engagement picture"
          />
        </Section>

        <Section>
          <Heading id="registry">
            <h2>Registry</h2>
          </Heading>
          <RegistryLinksText />
        </Section>
      </main>
    </>
  );
};

export default HomePage;
