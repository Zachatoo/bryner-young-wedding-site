import { Head } from "components";
import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head description="We couldn't find the page you were looking for."></Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 text-center">
        <h1 className="flex flex-col gap-4 pb-12 text-6.5xl sm:pb-16 sm:text-8xl font-great-vibes capitalize">
          <span className="text-5xl sm:text-6xl">404</span>
          <span className="text-5xl sm:text-6xl">Not Found</span>
        </h1>
        <Link href="/" className="text-lg">
          Take me home
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
