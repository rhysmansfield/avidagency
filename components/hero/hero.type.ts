import { CommonLink } from "@/types/common.type";
import { HeroImageProps } from "@/components/hero-image/hero-image.type";

export type HeroProps = Pick<HeroImageProps, "image"> & {
  title: [string, string];
  text: JSX.Element;
  buttons: [CommonLink, CommonLink];
};
