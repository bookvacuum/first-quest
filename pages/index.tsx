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
  const [secondAIVersion, setSecondAIVersion] = useState(aiVersion);

  const [review, setReview] = useState('');
  const [updated, setUpdated] = useState(review);
  const [instruction, setInstruction] = useState('edit this to make it funny');
  const [zkProof, setProof] = useState(''); 

const generateAIVersion = async (input: string, setValue: ((arg0: string) => void)) => {
  try {
    const response = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: input,
      instruction: instruction
    });  
    const generatedResult = response.data.choices[0].text ? response.data.choices[0].text : "no feedback from ai"
    console.log(generatedResult)
    setValue(generatedResult);
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
    setProof("1234312423423");
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
        <h2>Tell us how you really feel about your job, your company, your role. </h2>
        <p> <b> We use the power of AI to remix your words, so you can retain anonymity but also keep the sentiment of your words.
          Remix, edit, and generate versions of your story until you're happy with it. 
          Use this story to share your true opinions with your coworkers on an online community forum (coming soon!) to organize and demand better working conditions.
        </b> </p>

        <h2> Background </h2>
        <p> Workers are mobilizing in huge waves, see below on the latest on the Harper Collins and the UC protests.
        </p>
        <p> Links to articles about protests at Harper Collins and UC protests</p>
        <a href="https://www.theguardian.com/us-news/2022/nov/10/harpercollins-union-strike-publishing"> Harper Collins Protest: HarperCollins union workers go on strike over pay ‘for as long as it takes </a>
        <a href="https://www.latimes.com/california/story/2022-12-14/uc-strike-drags-into-5th-week-as-picketers-rally-at-ucla"> University of California Protest: ‘Shut it down!’: Picketers disrupt UC regents meeting as strike drags into 5th week </a>
        <p> <b>Start your journey in organizing communication between you and your coworkers anonymously, here. </b>
        </p>
      

      
        <br/>
        <div> 
        <label> 1. Step one, write an honest review of your working conditions here.
        <textarea
        id="message"
        name="message"
        onChange={handleChange}
        value={review}
        className={styles.reviewInput}
      />
      </label>
      {/* <h2>My Review: {review}</h2> */}
      <button onClick={handleClick} className={styles.button}>Click to review raw thoughts (unedited by AI)</button>
      <h2>Unedited review: {updated}</h2>
      </div>

      <br/>
      <br/>
      <label> 2. Step two, type your instruction to AI here. What do you want AI to do to your review? 
        <p> Try something like, "Edit this to add expletives"  </p>
        <p> The default if you don't try anything, is "Edit this like Siri would speak", which is ok, but you should try to add some expletives. xD </p>
        <input
        type="text"
        id="message"
        name="message"
        onChange={handleInstructionChange}
        value={instruction}
        className={styles.reviewInput}
      />
      </label>
      <br/>
      <button onClick={() => generateAIVersion(review, setAIVersion)} className={styles.button}> Generate AI Version </button>

      <h2>AI Version: This is the remixed version of your words.</h2>
      <textarea
        id="message"
        name="message"
        onChange={handleChange}
        value={aiVersion}
        className={styles.reviewInput}
      />

     <br/>
     <br/>
      <label> Don't like it? Try running the algorithm on the results. You can also try a new prompt in step two. 
        <textarea
        id="message"
        name="message"
        onChange={handleChange}
        value={secondAIVersion}
        className={styles.reviewInput}
      />
      </label>

      <button onClick={() => generateAIVersion(aiVersion, setSecondAIVersion)} className={styles.button}> Generate Another AI Version </button>


    <h2> Generate a ZK Proof that you completed this activity to join this community</h2>
      <button onClick={handleZkProofClick} className={styles.button}> Generate ZK Proof of Completion </button>
      
      <h3> Your Unique Proof of Contributing Individual (POCkI):  </h3>
      <h4>  {zkProof} </h4>
      <p>
        This signature is your zero knowledge proof of joining the community by participating in this MVP.
        Save this in a convenient place, like an Apple note! You will be using this in the future to verify that you have done this activity, without revealing your identity or your exact words. :)
      </p>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
