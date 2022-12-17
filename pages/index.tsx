import Head from "next/head";
import styles from "../styles/Home.module.css";
import { OpenAIApi, Configuration } from "openai";
import Link from "next/link";
import { useState } from "react";
//Import Smart contract 
// import {validEmailOracle} from "./validEmailOracle"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default function Home() {
  const [aiVersion, setAIVersion] = useState("");
  const [secondAIVersion, setSecondAIVersion] = useState(aiVersion);

  const [review, setReview] = useState("");
  const [updated, setUpdated] = useState(review);
  const [instruction, setInstruction] = useState("edit this to make it funny");
  const [zkProof, setProof] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAIVersion = async (
    input: string,
    setValue: (arg0: string) => void
  ) => {
    setLoading(true)
    try {
      const response = await openai.createEdit({
        model: "text-davinci-edit-001",
        input: input,
        instruction: instruction,
      });
      const generatedResult = response.data.choices[0].text
        ? response.data.choices[0].text
        : "no feedback from ai";
      console.log(generatedResult);
      setValue(generatedResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: any) => {
    setReview(event.target.value);
  };
  const handleInstructionChange = (event: any) => {
    setInstruction(event.target.value);
  };

  // Maybe somehow save this for the user? idk this can be used though
  const handleClick = () => {
    setUpdated(review);
  };

  const handleZkProofClick = () => {
    setProof("fdhqwidui132h89rhjksh78hj09hihasdkffioqw");
  };

  //Load up the smart contract validEmail Oracle 
  // useEffect(() => {
  //   (async () => {
  //     const { ValidEmailOracle } = await import('validEmailOracle');
  //   })();
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Quest</title>
        <meta name="description" content="Quest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uov6xbj.css" />
      </Head>

      <main>
        <a href="/first-post">
          <h1 className={styles.title}>identityprotecc</h1>
        </a>
        <h1 className={`${styles.center} ${styles.highlight}`}>Quest</h1>
        <h2> filter your honest workplace review with AI</h2>
        <h3>
          Tell us how you really feel about your job, your company, your role.{" "}
        </h3>
        <p>
          {" "}
          <b>
            {" "}
            We use the power of AI to remix your words, so you can retain
            anonymity but also keep the sentiment of your words. Remix, edit,
            and generate versions of your story until you're happy with it. Use
            this story to share your true opinions with your coworkers on an
            online community forum (coming soon!) to organize and demand better
            working conditions.
          </b>{" "}
        </p>

        {/* <h2> Background </h2>
        <p>
          {" "}
          Workers are mobilizing in huge waves, see below on the latest on the
          Harper Collins and the UC protests. There will always be a need to
          communicate anonymously, honestly, and accurately with peers,
          especially in times when collective action is needed for results.
        </p>
        <h4>
          {" "}
          Read more about the protests below (LATER! after you try this :D)
        </h4>
        <a href="https://www.theguardian.com/us-news/2022/nov/10/harpercollins-union-strike-publishing">
          {" "}
          Harper Collins Protest: HarperCollins union workers go on strike over
          pay ‘for as long as it takes{" "}
        </a>
        <a href="https://www.latimes.com/california/story/2022-12-14/uc-strike-drags-into-5th-week-as-picketers-rally-at-ucla">
          {" "}
          University of California Protest: ‘Shut it down!’: Picketers disrupt
          UC regents meeting as strike drags into 5th week{" "}
        </a> */}
        <p>
          {" "}
          <b>
            Start your journey in organizing communication between you and your
            coworkers anonymously, here.{" "}
          </b>
        </p>

        <br />
        <div className={styles.flexColumn}>
          <label className={styles.flexColumn}>
            {" "}
            1. Step one, write an honest review of your working conditions here.
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={review}
              className={styles.reviewInput}
            />
          </label>
          {/* <h2>My Review: {review}</h2> */}
          <button onClick={handleClick} className={styles.button}>
            Click to review raw thoughts (unedited by AI)
          </button>
          <h2>Unedited review: {updated}</h2>
        </div>

        <br />
        <br />
        <div className={styles.flexColumn}>
          <label className={styles.flexColumn}>
            {" "}
            2. Step two, type your instruction to AI here. What do you want AI
            to do to your review?
            <p> Try something like, "Edit this to add expletives" </p>
            <p>
              {" "}
              The default if you don't try anything, is "Edit this like Siri
              would speak", which is ok, but you should try to add some
              expletives. xD{" "}
            </p>
            <input
              type="text"
              id="message"
              name="message"
              onChange={handleInstructionChange}
              value={instruction}
              className={styles.reviewInput}
            />
          </label>
          <br />
          <button
            onClick={() => generateAIVersion(review, setAIVersion)}
            className={styles.button}
          >
            {" "}
            Generate AI Version{" "}
          </button>
          <p>
            {loading
              ? "Loading your AI version....... It may take 5 seconds......"
              : ""}
          </p>
          <h2>AI Version: This is the remixed version of your words.</h2>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={aiVersion}
            className={styles.reviewInput}
          />

          <br />
          <br />
          <label className={styles.flexColumn}>
            {" "}
            Don't like it? Try running the algorithm on the results. You can
            also try a new prompt in step two.
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={secondAIVersion}
              className={styles.reviewInput}
            />
          </label>

          <button
            onClick={() => generateAIVersion(aiVersion, setSecondAIVersion)}
            className={styles.button}
          >
            {" "}
            Generate Another AI Version{" "}
          </button>
        </div>

        <h2>
          {" "}
          Generate a ZK Proof that you completed this activity to join this
          community
        </h2>
        <button onClick={handleZkProofClick} className={styles.button}>
          {" "}
          Verify Work Email to Receive ZkProof of Participation{" "}
        </button>
        <h3> Your Unique ID for Proof of Contributing Individual (POCkI): </h3>
        <h4> {zkProof} </h4>
        <p>
          After you verify your email with us, you will receive a code here that
          will be your ID. We built a zkOracle here that will generate a
          signature that the data we received from you is verified, and that
          signature will be used by the smart contract that your ID came from
          our oracle. This enables you to retain anonymity, because now you can
          just use the ID to be identified on our platform, and we have the
          ability to verify any post you make is from you because of the ID
          verified by our zkoracle. :)
        </p>
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
