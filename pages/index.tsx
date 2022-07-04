import type { NextPage } from "next";
import { Countdown, Head } from "../components";

const Home: NextPage = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head></Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 text-center">
        <div className="flex flex-col pb-8 text-center sm:pb-16 font-great-vibes">
          <span className="text-3xl sm:text-5xl">Mary Katherine Bryner</span>
          <span className="text-xl sm:text-2xl">&</span>
          <span className="text-3xl sm:text-5xl">Zachary Matthew Young</span>
        </div>
        <h1 className="pb-6 text-6.5xl sm:pb-16 sm:text-8xl font-great-vibes">
          {"We're Getting Married!"}
        </h1>
        <div className="pb-4 text-3xl sm:text-5xl font-great-vibes">
          {formattedWeddingDate}
        </div>
        <Countdown targetTime={weddingDate} className="pb-6 sm:pb-8" />
        <span>More details to come...</span>
      </main>
    </div>
  );
};

export default Home;
