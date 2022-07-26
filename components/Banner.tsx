import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  text?: string;
}

export function Banner({ src, alt, text }: Props) {
  return (
    <>
      <div className="banner">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" priority />
        {text && (
          <h1 className="px-8 text-center hidden sm:block z-10 mt-auto pb-0 text-6.5xl sm:pb-8 text-white text-shadow sm:text-8xl font-great-vibes capitalize">
            {text}
          </h1>
        )}
      </div>
      {text && (
        <h1 className="px-8 text-center block sm:hidden mt-auto pb-6 text-6.5xl sm:pb-8 sm:text-8xl font-great-vibes capitalize">
          {text}
        </h1>
      )}
    </>
  );
}
