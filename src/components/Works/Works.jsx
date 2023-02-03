import styles from "./Works.module.css";
import { worksData } from "../../data/worksData";
import { FaGithub } from "react-icons/fa";

export function Works({ img }) {
  return (
    <div className={styles.works}>
      <div className={styles.titlePage}>
        <h1>Portifólio</h1>
      </div>
      <div className={styles.projects}>
        {worksData?.map((worksData, i) => {
          return (
            <div>
              <a key={i} target="_blank" rel="noreferrer" href={worksData.url}>
                <div className={styles.portifolioContent}>
                  <div className={styles.imgContent}>
                    <img src={worksData.img} alt="" />
                  </div>

                  <div className={styles.worksText}>
                    <div className={styles.worksName}>
                      <h6>{worksData.worksName}</h6>
                    </div>

                    <div className={styles.Description}>
                      <p>{worksData.Description}</p>
                    </div>
                  </div>
                  <div className={styles.worksGithub}>
                    <a target="_blank" rel="noreferrer" href={worksData.github}>
                      <FaGithub className={styles.gitHub} />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
