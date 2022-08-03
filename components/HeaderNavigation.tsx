import Link from "next/link";

export function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-20 px-4 pt-2 pb-1 bg-white">
      <nav>
        <ul className="flex gap-3 sm:gap-6">
          <li className="mr-auto">
            <Link href="/">
              <a className="no-underline sm:text-xl font-great-vibes">
                MK &amp; Z
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#proposal">
              <a className="text-sm no-underline">Proposal</a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#photos">
              <a className="text-sm no-underline">Photos</a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#registry">
              <a className="text-sm no-underline">Registry</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
