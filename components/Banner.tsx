import type { StaticImageData } from "next/image";
import type { PropsWithChildren } from "react";
import Image from "next/image";

interface Props {
  src: string | StaticImageData;
  alt: string;
}

export function Banner({ src, alt, children }: PropsWithChildren<Props>) {
  const classes = "z-10 text-center font-great-vibes";

  return (
    <>
      {children && (
        <div className={`sm:hidden block pb-6 text-green-dark ${classes}`}>
          {children}
        </div>
      )}
      <div className="banner">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
        {children && (
          <div
            className={`hidden sm:block text-white text-shadow ml-auto ${classes}`}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
}
