import Link from "next/link";

export function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-20 px-4 pt-2 pb-1 bg-cream-light">
      <nav>
        <ul className="flex gap-3 sm:gap-6">
          <li className="flex items-center mr-auto">
            <Link href="/">
              <a className="text-sm no-underline text-green-dark hover:text-black">
                Home
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#proposal">
              <a className="text-sm no-underline text-green-dark hover:text-black">
                Proposal
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#photos">
              <a className="text-sm no-underline text-green-dark hover:text-black">
                Photos
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#registry">
              <a className="text-sm no-underline text-green-dark hover:text-black">
                Registry
              </a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#faq">
              <a className="text-sm no-underline text-green-dark hover:text-black">
                FAQ
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
