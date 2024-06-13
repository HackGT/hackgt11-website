import { AspectRatio } from "@chakra-ui/react";
import styles from "./Embed.module.scss";

/* This is mostly to keep the index.tsx as clean as possible (so that the only mess there can be transformations). */
/* This may need to be modified to be more flexible for other sort of embeddings. */

interface EmbedProps {
  src: string;
  title: string;
  maxW: string;
  ratio: number;
}

const Embed = (ep: EmbedProps) => {
  return (
    <div className={styles.container}>
      <AspectRatio className={styles.embed} maxW={ep.maxW} ratio={ep.ratio}>
        <iframe title={ep.title} src={ep.src} allowFullScreen />
      </AspectRatio>
    </div>
  );
};

export default Embed;
