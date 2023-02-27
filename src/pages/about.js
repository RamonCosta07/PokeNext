import Image from "next/image";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre</h1>
      <p>
        Projeto foi desenvolvido utilizando conceitos de Next JS, como rotas
        dinâmicas e páginas estáticas.
          </p>
          <p>Também foi consumida a API de Pokémon da PokéAPI nele.</p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Pokémon Charizard"
      />
    </div>
  );
};

export default About;
