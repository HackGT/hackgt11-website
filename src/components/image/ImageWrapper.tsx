import { Image } from "@chakra-ui/react";

const ImageWrapper = (props: any) => {
  return <Image draggable="false" alt={props.alt} src={props.src} id={props.id} />;
};

export default ImageWrapper;
