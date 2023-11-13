import Form from "@/components/Form";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Background from "../assets/background.png";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div id={styles.Container}>
      <section id={styles.Home}>
        <Header />
        <article id={styles.Left_side}>
          <div className={styles.title_container}>
            <h2 className={styles.title}>¡Bienvenido!</h2>
            <p className={styles.subtitle}>
              Convertite ahora en un agente Flexy.
            </p>
          </div>
          <Form />
        </article>
      </section>
      <article id="desktop-visible" className={styles.right_side}>
        <Image src={Background} alt="background" priority />
      </article>
    </div>
  );
}
