import { Thumb } from "../thumb/thumb.view";
import { Robot } from "../../types";
import styles from "./card.module.scss";

export function Card({ country, description, first_name, avatar }: Robot) {
  return (
    <div className={styles.card}>
      <Thumb image_url={avatar} />
      <div className={styles["texts-box"]}>
        <h1 className={`${styles["card-title"]} ${styles.paragraph}`}>
          {first_name} from {country}
        </h1>
        <p className={styles["card-msg"]}>{description}</p>
      </div>
    </div>
  );
} 