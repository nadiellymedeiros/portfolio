import styles from "./Homepage.module.css";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Homepage() {
  return (
    <>
      <div className={styles.homeImg}>
        <img src="https://github.com/nadiellymedeiros.png" alt="" />
      </div>
      <div className={styles.homepage}>
        <div className={styles.homepageTitle}>
          <h1>Olá mundo, sou</h1>
          <span>Nadielly Xavier</span>

          <div className={styles.homepageP}>
            <p>
              Este é o meu Portifólio pessoal, aqui você pode encontrar um pouco
              mais sobre mim e meu trabalho
            </p>
          </div>

          <ul className={styles.socialList}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nadiellymedeiros"
              >
                <FaGithub className={styles.itemSocialList} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nadielly-de-medeiros-273258201/"
              >
                <FaLinkedin className={styles.itemSocialList} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/nadielly/"
              >
                <FaInstagram className={styles.itemSocialList} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
