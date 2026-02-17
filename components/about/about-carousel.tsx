import Image from "next/image";
import { FC, memo } from "react";

import { about_carousel } from "@/lib/constants/about-carousel";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

interface AboutCarousel {
  first_name: string;
  img_url: string;
  // phone_number: string;
  // email: string;
  // calendar_link: string;
}

interface AboutCarouselProps {
  isReverse?: boolean;
}

const AboutCarousel: FC<AboutCarouselProps> = ({ isReverse = false }) => {
  const renderCarousel = (
    about_carousel: AboutCarousel[],
    keyPrefix: string,
    ariaHidden: boolean = false,
  ) => (
    <ul
      key={keyPrefix}
      className={`${isReverse ? "reverse-about-carousel" : "about-carousel"}`}
      aria-hidden={ariaHidden}
    >
      {about_carousel.map((slide, index) => (
        <li key={`${keyPrefix}-${index}`} className="about-carousel-list">
          <Image
            src={slide.img_url}
            height={266}
            width={344}
            className="h-full w-auto rounded-full"
            alt={slide.first_name}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <MotionWrapper className="w-full inline-flex flex-nowrap overflow-hidden py-4">
      {renderCarousel(about_carousel, "carousel-main")}
      {Array(5)
        .fill(0)
        .map((_, i) => renderCarousel(about_carousel, `carousel-${i}`, true))}
    </MotionWrapper>
  );
};

export default memo(AboutCarousel);
