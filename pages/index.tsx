import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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
        <h2> Drop the tea on your employer, connect with your coworkers, anonymously, with the power of AI.</h2>
        <p>
            <h1>Steps</h1>
            <h3>1. Share your story, honestly, angrily, however you want it. </h3>
            <h3> 2. "Remix" your voice with AI. </h3>
            <p>We retain the sentiment in your post, but "hide" your voice by remixing your words with the help of AI. That way, you can really hand it to them. Or, at least give a shoutout to a lovely company in an interesting way, like how Winnie the Pooh did it or something.
              </p>
              <p>
                Examples of people you may be able to remix your text to sound like (depending on the wokeness of the AI):
                <ol>
                  <li>Oprah</li>
                  <li>Tina from L Word</li>
                  <li>Winnie the Pooh</li>
                  <li>Santa Claus</li>
                </ol>
              </p>
            3. Profit off your data, through <ul>
            <li> mental health you gain when you let it go. </li>
            <li> joy when you remember all the good times you shared with 
            your coworkers that you liked to spend lunches and afternoons with. </li>
            <li> maybe the inspiration to start a union? who knows? overthrow your boss? idk? </li>
            <li> Be a part of our community, contribute, meet the team, or just chat about your thoughts
             on your wildest working dreams, email us at <a href="mailto:team@quitnow.xyz">team@quitnow.xyz</a> </li>
            </ul>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
