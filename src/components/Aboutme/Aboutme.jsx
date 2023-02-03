import styles from "./Aboutme.module.css";

export function Aboutme() {
  return (
    <>
      <div className={styles.aboutMeTitle}>
        <div className={styles.aboutMeImg}>
          <img src="https://github.com/nadiellymedeiros.png" alt="" />
        </div>

        <h1>Quem sou</h1>
        <h4>
          Eu me chamo <span>Nadielly Xavier</span>
        </h4>
        <div className={styles.aboutMe}>
          <p>
            Desenvolvedora de Software apaixonada por soluções simples para
            problemas difíceis. Entusiasta dos métodos ágeis, de ambientes
            flexíveis e propensos a entrega continua. Aceito novos desafios e
            resolvo.
          </p>
        </div>

        <div className={styles.aboutMeInfo}>
          <div className={styles.aboutMeInfoTitle}>
            <p>Nome completo: Nadielly Xavier de Medeiros</p>
            <p>Nascimento: 26/12/1985 </p>
            <p>Nacionalidade: Brasileira</p>
            <p>Idiomas: Português, Inglês e Francês</p>
            <p>Localização: Goiânia-GO, Brasil </p>
          </div>
        </div>
      </div>
    </>
  );
}
