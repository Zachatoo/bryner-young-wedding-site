import Link from "next/link";

export function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-20 px-4 pt-2 pb-1 bg-cream-light">
      <nav>
        <ul className="flex gap-3 sm:gap-6">
          <li className="flex items-center mr-auto">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#story">
              <a>Our Story</a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#photos">
              <a>Photos</a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/#registry">
              <a>Registry</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
