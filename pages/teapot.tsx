import Head from "next/head";
import styles from "../styles/Home.module.css";
import { OpenAIApi, Configuration } from "openai";
import Link from "next/link";
import { useState } from "react";

//Import Smart contract

// import {validEmailOracle} from "./validEmailOracle"

export default function Teapot() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quest</title>
        <meta name="description" content="Teapot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.nav}>
        <a href="/first-post">
          <h1 className={styles.navItem}>learn more</h1>
        </a>
      </div>

      <main className={styles.main}>
        <h1 className={`${styles.center} ${styles.highlight}`}>Teapot</h1>
        <h2>
          {" "}
          Creating the largest collection of honest company reviews the web has
          ever seen.{" "}
        </h2>
      
      </main>

      <footer className={styles.footer}>
        <p>brought to you by proud quitters</p>
        <a href="https://micheburrito.medium.com/i-brought-my-friend-who-had-never-been-in-crypto-to-ethsf2022-and-we-won-4ab0610a9550">
          how we built quit now in 3 days, ethsf 2022 prize winner
        </a>
        <p>how we built this MVP (coming soon!)</p>
        <a href="mailto:team@quitnow.com" className={styles.link}>
          join the gen-z, AI, crypto-powered labor movement 3.0. send us an
          email to get involved!
        </a>
      </footer>
    </div>
  );
}
