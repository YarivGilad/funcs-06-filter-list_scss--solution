import styles from "./thumb.module.scss";

interface ThumbProps {
  image_url: string;
}

export function Thumb({ image_url }: ThumbProps) {
  return (
    <div className={styles["thumb-box"]}>
      <img className={styles.thumb} src={image_url} alt="profile visual" />
    </div>
  );
} 