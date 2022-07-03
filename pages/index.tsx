import type { NextPage } from "next";
import Head from "next/head";
import { Countdown } from "../components";

const Home: NextPage = () => {
  const weddingDate = new Date(2022, 8, 9, 12, 0, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bryner-Young Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 text-center">
        <h1 className="text-6xl font-bold font-great-vibes">
          {"We're Getting Married!"}
        </h1>
        <Countdown targetTime={weddingDate} className="py-8" />
      </main>
    </div>
  );
};

export default Home;
