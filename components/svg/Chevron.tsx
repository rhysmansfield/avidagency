import { SvgDirectionRotation, SvgProps } from "./svg.type";

export const Chevron = ({ direction, ...props }: SvgProps) => {
  const getDirection = (): SvgDirectionRotation => {
    switch (direction) {
      case "up":
      default:
        return "";
      case "right":
        return 90;
      case "down":
        return 180;
      case "left":
        return 270;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
        style={{
          transform: `rotate(${getDirection()}deg)`,
          transformOrigin: "center",
        }}
      />
    </svg>
  );
};
