import { SVGProps } from "react";

type SvgDirection = "up" | "down" | "left" | "right";
export type SvgDirectionRotation = "" | 90 | 180 | 270;

export type SvgProps = SVGProps<SVGSVGElement> & {
  direction?: SvgDirection;
};
