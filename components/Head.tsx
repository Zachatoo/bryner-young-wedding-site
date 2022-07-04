import NextHead from "next/head";
import { PropsWithChildren } from "react";

interface Props {
  title?: string;
  description?: string;
}

export function Head({
  title: propTitle,
  description: propDescription,
  children,
}: PropsWithChildren<Props>) {
  const twitterHandle = "@zachatoo";
  const cannonicalUrl = "bryneryoungwedding.us";
  const title = propTitle ?? "Bryner-Young Wedding";
  const description =
    propDescription ??
    "Mary Katherine Bryner and Zachary Matthew Young are getting married!";
  const previewImage = "/ogImage.jpeg";

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {/* Twitter */}
      <meta name="twitter:card" content={description} key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
      {/* Open Graph */}
      <meta property="og:url" content={cannonicalUrl} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </NextHead>
  );
}
