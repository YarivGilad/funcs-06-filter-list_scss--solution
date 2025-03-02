import { Card } from "../card/card.view";
import { Robot } from "../../types";
import styles from "./list.module.scss";

interface ListProps {
  listData: Robot[];
}

export function List({ listData }: ListProps) {
  return (
    <div className={styles["cards-list"]}>
      <ul>
        {listData
          .filter((item) => item.show)
          .map((item) => (
            <li className={styles["card-item"]} key={item.id}>
              <Card {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
} 