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
          <h1 className="z-10 hidden px-8 pb-0 mt-auto text-center text-white sm:block sm:pb-8 text-shadow">
            {text}
          </h1>
        )}
      </div>
      {text && (
        <h1 className="block px-8 pb-6 mt-auto text-center sm:hidden sm:pb-8">
          {text}
        </h1>
      )}
    </>
  );
}
