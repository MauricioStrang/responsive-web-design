import styles from "./page.module.css";

//teaching Ferchu the basics,
//he seems to have problems opening his project, aparently by not understanding what the main body of the projects is
//good tag understanding

export default function Home() {
  return (
      <div className={styles.container}>

        <section>
          <h1>CatPhotoApp</h1>
          <h2>Cat Photos</h2>
          <p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>
          <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt=""/></a>
        </section>

        <section>
          <h2>
            Cat Lists
          </h2>
          <h3>
            Things cats love:
          </h3>
          <ul>
            <li>cat nip</li>
            <li>laser pointer</li>
            <li>lasgna</li>
          </ul>
          <figure>
            <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate."/>
            <figcaption>Cats <em>love</em> lasagna</figcaption>
          </figure>
          <h3>Top 3 things cat hate:</h3>
          <ul>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
          </ul>
          <figure>
            <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field."/>
            <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
          </figure>
        
        </section>
        
      </div>
  );
}
