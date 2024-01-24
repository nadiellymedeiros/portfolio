import styles from "./Works.module.css";
import CardsWorks from "../CardsWorks/CardsWorks";

export function Works() {
  return (
    <div className={styles.works}>
      <div className={styles.titlePage}>
        <h1>Portifólio</h1>
      </div>

      <CardsWorks />
    </div>
  );
}
