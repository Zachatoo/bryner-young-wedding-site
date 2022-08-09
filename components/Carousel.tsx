import Image from "next/image";
import { useState } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  imagePaths: string[];
  alt?: string;
}

export function Carousel({ imagePaths, alt }: Props) {
  const [state, setState] = useState({
    isFullScreen: false,
    itemIndex: 0,
  });

  function _handleClickImage(itemIndex: number) {
    setState((prev) => ({
      isFullScreen: !prev.isFullScreen,
      itemIndex,
    }));
  }

  function _renderThumbs() {
    return imagePaths.map((fileName, i) => (
      <div key={i} className="relative w-full h-20">
        <Image
          src={fileName}
          alt={`${alt} thumbnail`}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
    ));
  }

  return (
    <>
      <ResponsiveCarousel
        onClickItem={_handleClickImage}
        useKeyboardArrows
        swipeable
        showIndicators={false}
        renderThumbs={_renderThumbs}
        selectedItem={state.itemIndex}
      >
        {imagePaths.map((fileName) => (
          <Image
            key={fileName}
            src={fileName}
            alt={alt ?? ""}
            className="object-contain"
            width={600}
            height={400}
          />
        ))}
      </ResponsiveCarousel>
      {state.isFullScreen && (
        <ResponsiveCarousel
          onClickItem={_handleClickImage}
          className="fixed top-0 left-0 z-50 w-screen h-screen my-auto bg-black-transparent"
          useKeyboardArrows
          swipeable
          showIndicators={false}
          showThumbs={false}
          selectedItem={state.itemIndex}
          autoFocus
        >
          {imagePaths.map((fileName) => (
            <div key={fileName} className="w-screen h-screen">
              <Image
                src={fileName}
                alt={alt ?? ""}
                className="object-contain"
                layout="fill"
              />
            </div>
          ))}
        </ResponsiveCarousel>
      )}
    </>
  );
}
