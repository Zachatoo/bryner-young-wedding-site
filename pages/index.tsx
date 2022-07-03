import type { NextPage } from "next";
import Head from "next/head";
import { Countdown } from "../components";

const weddingDate = new Date("2022-09-09");

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Bryner-Young Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-8 text-center">
        <h1 className="text-6xl font-bold font-great-vibes">We're Engaged!</h1>
        <Countdown targetTime={weddingDate} className="py-8" />
      </main>
    </div>
  );
};

export default Home;
