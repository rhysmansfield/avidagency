import { ServicesImageProps } from "@/components/services-image/services-image.type";

type Service = {
  title: string;
  text: string;
};

export type ServicesProps = Omit<ServicesImageProps, "additionalClassName"> & {
  title: string;
  text: string;
  services: [Service, Service, Service];
};
