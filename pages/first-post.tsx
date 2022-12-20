import styles from "../styles/aboutUs.module.css";

function About() {
  return (
    <div className={styles.card}>
      {/* <h1 className={styles.header}>how it works</h1> */}
      <h2 className={styles.header}>
        Creating the largest collection of honest company reviews the web has
        ever seen.
      </h2>
      <p>
        You submit a review of your shitty company. You can be honest and
        include however many details you’d like to include.{" "}
      </p>
      <p>
        We’ll paraphrase your review with AI in a way that preserves your
        sentiment. Then it will be instantly dumped into a melting pot of other
        AI-written reviews. Then, AI will create a synthesis based on this
        potpourri of reviews. The whole thing is done without any human
        intervention. A code script will be run only when at least 3 reviews are
        deposited What this means is that
      </p>
      <ol>
        <li>
          No human will ever read your raw review. So don’t worry about your
          NDA.
        </li>{" "}
        <li>
          The final AI-generated review will capture the sentiments of the
          collective, call it a qualitative average if you’d like!
        </li>{" "}
        <li>
          The AI-generated reviews will be the only thing ever read by other
          humans and ever made public.
        </li>{" "}
      </ol>
      <img src="AI.png" className={styles.imgresize} alt="vercel.svg" />
    </div>
  );
}
export default About;
