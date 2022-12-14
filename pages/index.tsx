import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { OpenAIApi, Configuration } from 'openai'
import { getAllJSDocTagsOfKind, setConstantValue } from 'typescript';
import { useEffect, useState } from 'react';


const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default function Home() {
  const [aiVersion, setAIVersion] = useState('');
  const [review, setReview] = useState('');
  const [updated, setUpdated] = useState(review);
  const [instruction, setInstruction] = useState('edit this like siri would speak');
  const [zkProof, setProof] = useState(''); 

const generateAIVersion = async () => {
  try {
    const response = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: review,
      instruction: instruction
    });  
    const generatedResult = response.data.choices[0].text ? response.data.choices[0].text : "no feedback from ai"
    console.log(generatedResult)
    setAIVersion(generatedResult);
  }
  catch (error) {
    console.log(error);
  }
}

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
    setProof("this is the zero knowledge proof that you have completed this. your privacy is saved by this signature. use this to prove that you have done this generation to participate in the Quit Now community.");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Quest</title>
        <meta name="description" content="Quest" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      
      <main>
        <div className={styles.container}>
        <h1>Quest </h1>
        <h2> Get it off your chest anonymously, and remix your feelings with the power of AI.</h2>
        <br/>
        <div> 
        <label> 1. First, write your thoughts here.
        <textarea
        id="message"
        name="message"
        onChange={handleChange}
        value={review}
        className={styles.reviewInput}
      />
      </label>
      {/* <h2>My Review: {review}</h2> */}
      <button onClick={handleClick}>Save Raw Review</button>
      <h2>Saved review: {updated}</h2>
      </div>

      <br/>
      <br/>
      <label> 2. Next, type your instruction to AI here. 
        <p> You may have to experiment with the right prompt to get something funny. </p>
          <p> The default is "Edit this like Siri would speak" </p>
        <p> You can also do "Edit this to be more positive." </p>
        <input
        type="text"
        id="message"
        name="message"
        onChange={handleInstructionChange}
        value={instruction}
      />
      </label>
      <button onClick={generateAIVersion} className={styles.button}> Generate AI Version </button>

      <h2>AI Version: {aiVersion}</h2>

      
      <button onClick={handleZkProofClick} className={styles.button}> Generate ZK Proof of Completion </button>
      
      <p> My Proof: {zkProof} </p>

        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
